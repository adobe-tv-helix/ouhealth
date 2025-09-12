import { getMetadata } from '../../scripts/aem.js';
import { isAuthorEnvironment, moveInstrumentation } from '../../scripts/scripts.js';

/**
 *
 * @param {Element} block
 */
export default async function decorate(block) {
  // Note: Hard-coded for demo purposes
  const aemAuthorUrl = getMetadata('authorUrl') || 'https://author-p53852-e347001.adobeaemcloud.com';
  const aemPublishUrl = getMetadata('publishUrl') || 'https://publish-p53852-e347001.adobeaemcloud.com';
  const persistedQuery = '/graphql/execute.json/ouhealth/doctorByPath';

  const contentPath = block.querySelector(':scope div:nth-child(1) > div a')?.textContent?.trim();

  const variationName =
    block
      .querySelector(':scope div:nth-child(2) > div')
      ?.textContent?.trim()
      ?.toLowerCase()
      ?.replace(' ', '_') || 'master';

  
  block.innerHTML = ``;

  const isAuthor = isAuthorEnvironment();
  const url = window?.location?.origin?.includes('author')
    ? `${aemAuthorUrl}${persistedQuery};path=${contentPath};variation=${variationName};ts=${
        Math.random() * 1000
      }`
    : `${aemPublishUrl}${persistedQuery};path=${contentPath};variation=${variationName};ts=${
        Math.random() * 1000
      }`;
  const options = { credentials: 'include' };

  const cfReq = await fetch(url, options)
    .then((response) => response.json())
    .then((contentfragment) => {
      let data = '';
      if (contentfragment.data) {
        data = contentfragment.data[Object.keys(contentfragment.data)[0]].item;
      }
      return data;
    });
  const itemId = `urn:aemconnection:${contentPath}/jcr:content/data/${variationName}`;

  block.setAttribute('data-aue-type', 'container');
  block.innerHTML = `
  <div class='block' data-aue-resource=${itemId} data-aue-label='Content Fragment' data-aue-type='reference' data-aue-filter='cf'>
		<div class='card-body-content'>
        <p data-aue-prop='fullname' data-aue-label='Full Name' data-aue-type='text' class='fullname'>${
          cfReq?.fullName
        }</p>
        <h2 data-aue-prop='title' data-aue-label='Title' data-aue-type='text' class='title'>${
          cfReq?.title
        }</h2>
    </div>
  </div>
	`;

  if (!isAuthor) {
    moveInstrumentation(block, null);
    block.querySelectorAll('*').forEach((elem) => moveInstrumentation(elem, null));
  }
}