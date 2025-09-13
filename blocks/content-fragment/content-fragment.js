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

  block.innerHTML = `
  <div class='main flex-spaced-wrap-between-reversed-top-block-1024'>
    <aside class="sub-zone side-zone" id="SubZoneRight" role="presentation">
        <section class="system-style system-entry no-padding physician ui-repeater visible" id="PhysiciansSideInfo" universal_="true" data-onvisible="visible">	
            <figure class="system-card tall" role="presentation" data-item="i">
                <picture class="">
                    <img class="bg-cover-center" src="${cfReq?.imagePath?._path}" alt=""> 
                </picture>
            </figure>
        </section>
        <section class="system-style physician-locations locations no-padding full ui-repeater visible" id="PhysicianLocationsContainer" universal_="true" data-onvisible="visible" data-firstname="Tony" data-lastname="Abdo">
            <header role="presentation">
                <strong class="title-style-3">Locations</strong>
            </header>
            <ul class="system-cards items-1">
                <li class="item-1" data-item="i" data-key="5393931">
                    ${cfReq.locationsArea.html}
                    <a aria-label="more information about this location" class="link-style-1" href="#">More Information</a>
                </li>
            </ul>
        </section>
    </aside>
    <div class="sub-zone content-zone" id="SubZoneLeft">
        <article class="system-style physician system-entry ui-repeater visible" id="PhysicianContent" universal_="true" data-onvisible="visible" data-content="true">
	        <h1 class="hide-1024" aria-level="2" role="heading">${cfReq?.fullName},  ${cfReq?.title}</h1>
	
		    <ul class="inline-items">
			    <li class="inline-svg flex-middle"><svg viewBox="0 0 36 36" data-use="/cms/svg/site/dv5guqmrkyk.36.svg#check" aria-hidden="true">
	                <path d="M9.204 33.656a17.836 17.836 0 0 1-8.516-10.792a17.75 17.75 0 0 1 1.618-13.64a18.016 18.016 0 0 1 15.716-9.182a18.056 18.056 0 0 1 8.779 2.286a0.964 0.964 0 0 1 0.458 0.59a0.964 0.964 0 0 1-0.087 0.746a0.98 0.98 0 0 1-0.855 0.498a0.922 0.922 0 0 1-0.476-0.128a16.098 16.098 0 0 0-7.83-2.032a16.016 16.016 0 0 0-3.222 0.33a15.915 15.915 0 0 0-10.163 6.864a15.848 15.848 0 0 0-2.334 12.022a16.078 16.078 0 0 0 15.703 12.806a16.182 16.182 0 0 0 3.236-0.332a15.938 15.938 0 0 0 10.172-6.864a15.876 15.876 0 0 0 2.325-12.029a0.956 0.956 0 0 1 0.143-0.73a0.942 0.942 0 0 1 0.621-0.411a0.776 0.776 0 0 1 0.194-0.018a0.97 0.97 0 0 1 0.952 0.774a18.415 18.415 0 0 1 0.363 3.6a18.012 18.012 0 0 1-2.294 8.762a18.038 18.038 0 0 1-15.723 9.182A17.998 17.998-35176.904 0 1 9.204 33.656Zm8.103-11.567l-6.808-6.788a0.984 0.984 0 0 1-0.288-0.693a0.945 0.945 0 0 1 0.288-0.687a0.975 0.975 0 0 1 0.69-0.291a0.956 0.956 0 0 1 0.687 0.291l6.122 6.099l16.329-16.288a0.97 0.97 0 0 1 0.69-0.288a0.969 0.969 0 0 1 0.69 0.28a1.004 1.004 0 0 1 0.288 0.698a0.96 0.96 0 0 1-0.288 0.682l-17.016 16.983a1.008 1.008 0 0 1-0.693 0.28A0.981 0.981-35176.904 0 1 17.31 22.092Z"></path></svg>
                    Accepting New Patients
                </li>
			
				<li class="inline-svg flex-middle"><svg viewBox="0 0 36 36" data-use="/cms/svg/site/dv5guqmrkyk.36.svg#check" aria-hidden="true">
	<path d="M9.204 33.656a17.836 17.836 0 0 1-8.516-10.792a17.75 17.75 0 0 1 1.618-13.64a18.016 18.016 0 0 1 15.716-9.182a18.056 18.056 0 0 1 8.779 2.286a0.964 0.964 0 0 1 0.458 0.59a0.964 0.964 0 0 1-0.087 0.746a0.98 0.98 0 0 1-0.855 0.498a0.922 0.922 0 0 1-0.476-0.128a16.098 16.098 0 0 0-7.83-2.032a16.016 16.016 0 0 0-3.222 0.33a15.915 15.915 0 0 0-10.163 6.864a15.848 15.848 0 0 0-2.334 12.022a16.078 16.078 0 0 0 15.703 12.806a16.182 16.182 0 0 0 3.236-0.332a15.938 15.938 0 0 0 10.172-6.864a15.876 15.876 0 0 0 2.325-12.029a0.956 0.956 0 0 1 0.143-0.73a0.942 0.942 0 0 1 0.621-0.411a0.776 0.776 0 0 1 0.194-0.018a0.97 0.97 0 0 1 0.952 0.774a18.415 18.415 0 0 1 0.363 3.6a18.012 18.012 0 0 1-2.294 8.762a18.038 18.038 0 0 1-15.723 9.182A17.998 17.998-35176.904 0 1 9.204 33.656Zm8.103-11.567l-6.808-6.788a0.984 0.984 0 0 1-0.288-0.693a0.945 0.945 0 0 1 0.288-0.687a0.975 0.975 0 0 1 0.69-0.291a0.956 0.956 0 0 1 0.687 0.291l6.122 6.099l16.329-16.288a0.97 0.97 0 0 1 0.69-0.288a0.969 0.969 0 0 1 0.69 0.28a1.004 1.004 0 0 1 0.288 0.698a0.96 0.96 0 0 1-0.288 0.682l-17.016 16.983a1.008 1.008 0 0 1-0.693 0.28A0.981 0.981-35176.904 0 1 17.31 22.092Z"></path>
</svg><a href="/about-ou-health/about-ou-health-physicians/">Member of OU Health Physicians</a></li>
			
		</ul>
	
	<div class="stars-cont ui-repeater" id="PhysicianContent_ITM114341_ctl08" data-item="i" data-key="114341">
		
			<div class="rating-cont flex-start-middle">
				<div class="stars-cont">
					<div class="starz" style="
						background-position: -92% 0;
						background-image: linear-gradient(to right, #ffffff 50%, #f0d283 50%);
						background-size: 200% 100%;
					">
						<img src="/images/panel/star-ratings.png" alt="">
					</div>
					<span>4.6</span><span>&nbsp;out of 5&nbsp;</span>
				</div>
				<div>
					<span>(21&nbsp;</span><span> Ratings)</span>
					
						<span>, 7&nbsp;</span><span> Comments</span>
					
				</div>
			</div>
			
		
	</div>
	<a style="font-size: 0.8em;text-decoration: underline;" href="#physicianSchema">VIEW ALL COMMENTS</a>
	<ul class="system-callout description-list" data-item="i" data-key="114341">
		
		
		<li class="full flex-between-top-spaced-wrap-block-500 ui-repeater" id="PhysicianContent_ITM114341_PrimaryPhysicianSpecialties">
			<strong class="label-style third">Primary Specialty:</strong>
			<span class="two-thirds block">
				<a href="/find-a-doctor/?Specialty=287068" data-item="i" data-key="4048044">Pulmonary Medicine</a>
			</span>
		</li>
		
		<li class="full flex-between-top-spaced-wrap-block-500 ui-repeater" id="PhysicianContent_ITM114341_AdditionalLanguages">
			<strong class="label-style third">Languages Spoken:</strong>
			<span class="two-thirds block">
				<span data-item="i" data-key="1184963">Arabic, </span><span data-item="i" data-key="1184964">French, </span><span data-item="i" data-key="1267364">English</span>
			</span>
		</li>
		
		
			<li class="flex-between-top-spaced-wrap-block-500">
				<strong class="label-style third">Gender: </strong>
				<span class="two-thirds block">
					Male
					
				</span>
			</li>
		
	</ul>
	
		<div id="PhysicianContent_ITM114341_PhysEducation" class="phys-education content-style mar-t-3 ui-repeater">
			<strong class="title-style-2">Health Education</strong>
			<ul class="full flex-spaced-wrap-block-500 items-4 mar-t-tiny">
				<li class="full"><strong class="title-style-3 full">Medical School</strong></li><li class="half mar-e-tiny" data-item="i" data-key="120546">
					
					<span>Lebanese University<br></span>
				</li>
			</ul><ul class="full flex-spaced-wrap-block-500 items-4 mar-t-tiny">
				<li class="full"><strong class="title-style-3 full">Fellowship</strong></li><li class="half mar-e-tiny" data-item="i" data-key="121234">
					
					<span>OU College of Medicine<br>Oklahoma City, OK<br></span>
				</li>
			</ul><ul class="full flex-spaced-wrap-block-500 items-4 mar-t-tiny">
				<li class="full"><strong class="title-style-3 full">Residency</strong></li><li class="half mar-e-tiny" data-item="i" data-key="121563">
					
					<span>Roger Williams Medical Center - Boston University<br>Boston, MA<br></span>
				</li>
			</ul><ul class="full flex-spaced-wrap-block-500 items-4 mar-t-tiny">
				<li class="full"><strong class="title-style-3 full">Board Certification</strong></li><li class="half mar-e-tiny" data-item="i" data-key="122137">
					<strong class="title-style-5" role="heading" aria-level="3">American Board of Internal Medicine</strong>
					<span></span>
				</li>
			</ul>
		</div>
	
	
	
		<div class="content-style">
			<strong class="title-style-2">Medical Interests</strong>
			
				<strong class="title-style-5" role="heading" aria-level="3">Areas of Interest:</strong>
				<ul><li>Pleural Disease</li><li>Lung Cancer</li><li>COPD/Asthma</li><li>Point of Care Ultrasonography</li></ul>
			
			
			
			
		</div>
	
	
		
			<input type="hidden" class="ui-cms-input" id="PhysicianContent_ITM114341_isReviews__edit_" name="PhysicianContent$ITM114341$isReviews$_edit_" value="">
<input type="hidden" class="ui-cms-input" id="PhysicianContent_ITM114341_isReviews__command_" name="PhysicianContent$ITM114341$isReviews$_command_" value="">
<div class="phys-comments reviews mar-t-huge ui-repeater ui-ajax" id="PhysicianContent_ITM114341_isReviews" data-ajaxreplace="true">
				<input type="hidden" id="PhysicianContent_ITM114341_isReviews_HDR0_ResultsPerPage" value="4" autocomplete="off" class="ui-cms-input" name="PhysicianContent$ITM114341$isReviews$HDR0$ResultsPerPage" data-search="true">
				<input type="hidden" id="PhysicianContent_ITM114341_isReviews_HDR0_PagingID" autocomplete="off" class="ui-cms-input" name="PhysicianContent$ITM114341$isReviews$HDR0$PagingID" value="" data-search="true">
				<a name="Reviews"></a>
				<h2>Reviews</h2>
				<ul id="physicianSchema">
					<li style="display:none;">
						<span itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
							<meta itemprop="ratingCount" content="7">
							<meta itemprop="bestRating" content="5.00">
							<meta itemprop="ratingValue" content="4.680000">
							<meta itemprop="worstRating" content="1">
						</span>
					</li><li class="cms-repeater-placeholder" style="display:none !important"></li><li class="full flex-between-top-between" data-item="i" data-key="1502383389">
						<span class="review-date">08/16/2025</span>
							<div class="stars-cont flex-middle-start">
							
								<div class="starz" style="
									background-position: -100% 0;
									background-image: linear-gradient(to right, #ffffff 50%, #f0d283 50%);
									background-size: 200% 100%;
								">
									<img src="/images/panel/star-ratings.png" alt="Rating: 5.00">
								</div>
							
						</div>
						<p>I love Dr. Tony Abdo. He is so kind and he is truly compassionate.</p>
						
							<div class="all-the-schema" style="display:none;">
								<span itemprop="review" itemscope="" itemtype="http://schema.org/Review">
									<meta itemprop="author" content="Anonymous">
									<meta itemprop="reviewBody" content="I love Dr. Tony Abdo. He is so kind and he is truly compassionate.">
									<div itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating">
										<meta itemprop="ratingValue" content="5.00">
									</div>
									<meta itemprop="datePublished" content="Aug 16, 2025">
								</span>
							</div>
						
					</li><li class="full flex-between-top-between" data-item="i" data-key="1502358785">
						<span class="review-date">04/17/2025</span>
							<div class="stars-cont flex-middle-start">
							
								<div class="starz" style="
									background-position: -100% 0;
									background-image: linear-gradient(to right, #ffffff 50%, #f0d283 50%);
									background-size: 200% 100%;
								">
									<img src="/images/panel/star-ratings.png" alt="Rating: 5.00">
								</div>
							
						</div>
						<p>Good</p>
						
							<div class="all-the-schema" style="display:none;">
								<span itemprop="review" itemscope="" itemtype="http://schema.org/Review">
									<meta itemprop="author" content="Anonymous">
									<meta itemprop="reviewBody" content="Good">
									<div itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating">
										<meta itemprop="ratingValue" content="5.00">
									</div>
									<meta itemprop="datePublished" content="Apr 17, 2025">
								</span>
							</div>
						
					</li><li class="full flex-between-top-between" data-item="i" data-key="1502358599">
						<span class="review-date">04/10/2025</span>
							<div class="stars-cont flex-middle-start">
							
								<div class="starz" style="
									background-position: -100% 0;
									background-image: linear-gradient(to right, #ffffff 50%, #f0d283 50%);
									background-size: 200% 100%;
								">
									<img src="/images/panel/star-ratings.png" alt="Rating: 5.00">
								</div>
							
						</div>
						<p>I would recommend Dr Abdo to anyone. He is one of the most concerned doctors I have had.</p>
						
							<div class="all-the-schema" style="display:none;">
								<span itemprop="review" itemscope="" itemtype="http://schema.org/Review">
									<meta itemprop="author" content="Anonymous">
									<meta itemprop="reviewBody" content="I would recommend Dr Abdo to anyone. He is one of the most concerned doctors I have had.">
									<div itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating">
										<meta itemprop="ratingValue" content="5.00">
									</div>
									<meta itemprop="datePublished" content="Apr 10, 2025">
								</span>
							</div>
						
					</li><li class="full flex-between-top-between" data-item="i" data-key="1502349183">
						<span class="review-date">01/18/2025</span>
							<div class="stars-cont flex-middle-start">
							
								<div class="starz" style="
									background-position: -100% 0;
									background-image: linear-gradient(to right, #ffffff 50%, #f0d283 50%);
									background-size: 200% 100%;
								">
									<img src="/images/panel/star-ratings.png" alt="Rating: 5">
								</div>
							
						</div>
						<p>I'm going through a very rough time and Dr. Abdo showed compassion and care and excellent bed side manner</p>
						
							<div class="all-the-schema" style="display:none;">
								<span itemprop="review" itemscope="" itemtype="http://schema.org/Review">
									<meta itemprop="author" content="Anonymous">
									<meta itemprop="reviewBody" content="I'm going through a very rough time and Dr. Abdo showed compassion and care and excellent bed side manner">
									<div itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating">
										<meta itemprop="ratingValue" content="5">
									</div>
									<meta itemprop="datePublished" content="Jan 18, 2025">
								</span>
							</div>
						
					</li><li class="cms-repeater-placeholder" style="display:none !important"></li>
				</ul>
				
					<div class="more clear">
						<a class="showmore" href="javascript:void('More')">Show More</a>
					</div>
				
			</div>
		
        </article>
    </div>
</div>
`;
  if (!isAuthor) {
    moveInstrumentation(block, null);
    block.querySelectorAll('*').forEach((elem) => moveInstrumentation(elem, null));
  }
}