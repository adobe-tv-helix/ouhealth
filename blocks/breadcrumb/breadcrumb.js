import { getMetadata } from '../../scripts/aem.js';

export default function decorate(block) {
    block.innerHTML = `
        <div class="breadcrumb v2 main" id="BreadcrumbsButtonsWide" universal_="true">
	        <div>
		        <div class="bread-container flex-wrap-start-middle system-style" id="BreadCrumb">
			        <a aria-label="back to homepage" href="/" class="home-link flex-middle-center">
                    <svg viewBox="0 0 36 36" data-use="https://www.ouhealth.com/cms/svg/site/icon_home.36.svg " role="presentation" aria-hidden="true">
	                <path d="M17.966 3.603a0.967 0.967 0 0 0-0.532 0.183l-17.095 13.496a0.931 0.931 0 0 0-0.154 1.279a0.945 0.945 0 0 0 1.279 0.141l16.534-13.054l16.534 13.054a0.904 0.904 0 0 0 1.123-1.42l-17.095-13.496A1.029 1.029-22.13 0 0 17.966 3.603Zm-11.22 12.104l-1.798 1.42v14.369a0.9 0.9 0 0 0 0.9 0.9h8.098a0.9 0.9 0 0 0 0.9-0.9v-8.098h6.298v8.098a0.9 0.9 0 0 0 0.9 0.9h8.098a0.9 0.9 0 0 0 0.9-0.9v-14.369l-1.798-1.42v14.887H22.942V22.492a0.9 0.9 0 0 0-0.9-0.9h-8.098a0.9 0.9 0 0 0-0.9 0.9v8.098H6.747Z"></path>
                    </svg>
                    </a>
			        <span class="separator">
                    <svg viewBox="0 0 36 36" data-use="https://www.ouhealth.com/cms/svg/site/icon_link_arrow.36.svg" role="presentation" aria-hidden="true">
	                <polygon points="9.786 36 7.427 33.466 23.505 18 7.427 2.534 9.786 0 28.573 18"></polygon>
                    </svg>
                    </span>
			        <a href="/find-a-doctor" target="">Find a Doctor</a>
                    <span class="separator">
                    <svg viewBox="0 0 36 36" data-use="https://www.ouhealth.com/cms/svg/site/icon_link_arrow.36.svg" role="presentation" aria-hidden="true">
                    <polygon points="9.786 36 7.427 33.466 23.505 18 7.427 2.534 9.786 0 28.573 18"></polygon>
                    </svg>
                    </span>
                    <span class="selected link-style-disabled">${getMetadata('og:title')} MD</span>
		        </div>
	        </div>
        </div>
    `;
}