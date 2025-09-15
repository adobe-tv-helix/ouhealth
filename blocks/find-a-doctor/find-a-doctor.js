import { readBlockConfig } from '../../scripts/aem.js';
import { getMetadata } from '../../scripts/aem.js';
import { isAuthorEnvironment, moveInstrumentation } from '../../scripts/scripts.js';

/**
 *
 * @param {Element} block
 */
export default async function decorate(block) {
	const config = readBlockConfig(block);
	console.log('block config', config);

    block.innerHTML = `
        <div class="filter-header">
			<div class="main slider">
				<header role="presentation">
					<h1>Find a Doctor</h1>
				</header>
				<fieldset class="search-form">
					<legend>Provider Search</legend>
					<ul class="flex-between-grid-spaced-break-1024-block-800-wrap full">
						<li class="search third">
							<label for="PhysicianSearch_HDR0_PhysicianName" id="LabelName">Search by Name</label>
							<div class="input-text">
								<input id="PhysicianSearch_HDR0_PhysicianName" autocomplete="off" type="text" placeholder="Doctor Name" class="ui-cms-input-custom" name="PhysicianSearch$HDR0$PhysicianName" value="" data-history="PhysicianName" data-search="true">
								<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_search.36.svg" role="presentation" aria-hidden="true">				
	                            <path d="M25.908 23.187L36 33.278L33.278 36L23.187 25.908C20.758 27.763 17.725 28.866 14.433 28.866C6.462 28.866 0 22.404 0 14.433C0 6.462 6.462 0 14.433 0C22.404 0 28.866 6.462 28.866 14.433C28.866 17.725 27.763 20.758 25.908 23.187L25.908 23.187ZM14.433 25.017C20.279 25.017 25.017 20.279 25.017 14.433C25.017 8.586 20.279 3.848 14.433 3.848C8.586 3.848 3.848 8.586 3.848 14.433C3.848 20.279 8.586 25.017 14.433 25.017Z"></path>
                                </svg>
							</div>
						</li>
						<li class="select third">
							<label for="PhysicianSearch_HDR0_SpecialtyIDs" id="LabelService">Search by Specialty</label>
							<div class="input-text">
								<select id="PhysicianSearch_HDR0_SpecialtyIDs" autocomplete="off" class="ui-cms-select ui-cms-input" name="PhysicianSearch$HDR0$SpecialtyIDs" data-history="SpecialtyIDs" data-history-qs="Specialty" data-search="true">
									<option class="hide" style="display:none;" value="287068" id="FindAPhysician_1" data-page=""></option>
									<option value="">All Specialties</option>
									<option value="286974">Adolescent Medicine</option><option value="395690">Advanced Lung Disease</option><option value="286975">Audiology</option><option value="286976">Bariatric Surgery</option><option value="286980">Breast Cancer Surgery</option><option value="286979">Breast Imaging</option><option value="390053">Cancer and Aging Services</option><option value="286981">Cardiology</option><option value="286982">Cardiothoracic Surgery</option><option value="395540">Cardiovascular Surgery</option><option value="314665">Child Abuse Pediatrics</option><option value="286986">Colon &amp; Rectal Surgery</option><option value="393774">Concussion Care</option><option value="286990">Critical Care Medicine</option><option value="286992">Dermatology</option><option value="286993">Developmental &amp; Behavioral Pediatrics</option><option value="286994">Diabetes &amp; Endocrinology</option><option value="317585">Dietetics</option><option value="286997">Ear, Nose &amp; Throat</option><option value="286999">Eye Care</option><option value="287000">Family Medicine</option><option value="395605">Fecal Incontinence</option><option value="287002">Fertility</option><option value="287003">Gastroenterology</option><option value="287078">General Surgery</option><option value="287006">Genetics</option><option value="287007">Geriatrics</option><option value="287008">Gynecologic Oncology</option><option value="287009">Gynecology</option><option value="287010">Hand Surgery</option><option value="307412">Head &amp; Neck Cancer Surgery</option><option value="287011">Hematology &amp; Oncology</option><option value="384466">Hepatobiliary, Pancreas &amp; Gastrointestinal Cancer Surgery</option><option value="287013">Infectious Diseases</option><option value="287015">Internal Medicine</option><option value="287018">Interventional Radiology</option><option value="395015">Kidney Transplant</option><option value="383838">Limb Preservation</option><option value="384468">Lung Cancer &amp; Thoracic Surgery</option><option value="287020">Maternal-Fetal Medicine (High Risk Pregnancy)</option><option value="395604">Mental &amp; Behavioral Health</option><option value="287027">Neonatology</option><option value="287028">Nephrology</option><option value="287029">Neuro-Oncology</option><option value="287030">Neurology</option><option value="287031">Neuropsychology</option><option value="287033">Neurosurgery</option><option value="287036">Obstetrics</option><option value="287039">Orthopedic Surgery</option><option value="395109">Orthotics</option><option value="395371">Otolaryngology</option><option value="287042">Palliative Medicine</option><option value="287044">Pediatric Cardiology</option><option value="314081">Pediatric Cardiothoracic Surgery</option><option value="287045">Pediatric Diabetes &amp; Endocrinology</option><option value="307414">Pediatric Ear Nose &amp; Throat</option><option value="287048">Pediatric Gastroenterology</option><option value="287049">Pediatric Hematology &amp; Oncology</option><option value="287050">Pediatric Infectious Diseases</option><option value="287051">Pediatric Nephrology</option><option value="287052">Pediatric Neurology</option><option value="314084">Pediatric Neurosurgery</option><option value="307415">Pediatric Orthopedic Surgery</option><option value="287054">Pediatric Plastic Surgery</option><option value="314663">Pediatric Psychiatry</option><option value="287055">Pediatric Psychology</option><option value="287056">Pediatric Pulmonary Medicine</option><option value="287057">Pediatric Rheumatology</option><option value="287058">Pediatric Sleep Medicine</option><option value="287059">Pediatric Surgery</option><option value="337649">Pediatric Urgent Care</option><option value="307413">Pediatric Urology</option><option value="287060">Pediatrics</option><option value="387522">Phase I Cancer Clinical Trials</option><option value="395826">Phase II &amp; III Clinical Trials</option><option value="287061">Physical Therapy</option><option value="287064">Plastic &amp; Reconstructive Surgery</option><option value="287065">Podiatry</option><option value="395852">Prostate Cancer</option><option value="287066">Psychiatry</option><option value="287067">Psychology</option><option value="287068" selected="">Pulmonary Medicine</option><option value="287070">Radiation Oncology</option><option value="394939">Reproductive Medicine</option><option value="287072">Rheumatology</option><option value="317586">Sleep Medicine</option><option value="395045">Social Work</option><option value="384469">Soft Tissue &amp; Skin Cancer Surgery</option><option value="287075">Speech Language Pathologist</option><option value="287076">Sports Medicine</option><option value="321626">Surgical Critical Care</option><option value="287080">Surgical Oncology</option><option value="307411">Thoracic Cancer Surgery</option><option value="314723">Thoracic Surgery</option><option value="287082">Transplant</option><option value="287084">Trauma Surgery</option><option value="287085">Urogynecology</option><option value="287086">Urologic Oncology</option><option value="287087">Urology</option><option value="287089">Vascular Surgery</option><option value="322705">Women's Health</option><option value="292465">Wound &amp; Burn Care</option>
								</select>
								<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_caret_down.36.svg" role="presentation" aria-hidden="true" tabindex="-1">
	                            <path d="M14.715 25.405c-0.098-0.168 3.245 3.018 3.288 3.047l3.107-3.047l14.89-14.653c0.051-0.03-0.83-0.812-1.715-1.695a14.161 14.161 0 0 0-1.485-1.506L18.005 22.352l-14.799-14.799c0.02 0-0.735 0.701-1.622 1.584s-1.622 1.598-1.581 1.622Z"></path>
                                </svg>
							</div>
						</li>
						<li class="select third">
							<label for="PhysicianSearch_HDR0_Gender" id="LabelGender">Search by Gender</label>
							<div class="input-text">
								<select id="PhysicianSearch_HDR0_Gender" autocomplete="off" class="ui-cms-select ui-cms-input" name="PhysicianSearch$HDR0$Gender" data-history="Gender" data-search="true">
									<option value="" selected="">Any</option>
									<option value="F">Female</option>
									<option value="M">Male</option>
								</select>
								<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_caret_down.36.svg" role="presentation" aria-hidden="true" tabindex="-1">			
	                            <path d="M14.715 25.405c-0.098-0.168 3.245 3.018 3.288 3.047l3.107-3.047l14.89-14.653c0.051-0.03-0.83-0.812-1.715-1.695a14.161 14.161 0 0 0-1.485-1.506L18.005 22.352l-14.799-14.799c0.02 0-0.735 0.701-1.622 1.584s-1.622 1.598-1.581 1.622Z"></path>
                            </svg>
							</div>
						</li>
					</ul>
				</fieldset>
				<div class="search-btn-con full flex-between-block-500">
					<a href="javascript:void(0);" class="link-style-2 filter-btn more-less" data-type="open" role="button" tabindex="0" aria-expanded="false">
						<span class="filter-show" data-role="btn"><img src="https://www.ouhealth.com/images/assets/link-arrow-large.png" alt="Show Advanced Filters">Show Advanced Filters</span></a>
					<a aria-label="click to clear existing filters" href="javascript:void('ClearAll');" class="link-style-2 clear-filters">
                        <img src="https://www.ouhealth.com/images/assets/link-arrow-large.png" alt="Clear Filters">
                        Clear Filters
                    </a>
				</div>
			</div>
		</div>
    `;

    const searchResults = document.createElement('div');
    searchResults.className = 'doctor-results main system-padding';
    searchResults.innerHTML = `
        <header class="mar-b-3 flex-between-middle" role="presentation">
            <h2 class="title-style-2">All Doctors</h2>
        </header>
    `;

    const doctorResultsList = document.createElement('ul');
    doctorResultsList.className = 'system-cards items-25';
    searchResults.appendChild(doctorResultsList);

    renderAllDoctorResults(doctorResultsList);

    block.appendChild(searchResults);
}

async function renderAllDoctorResults(doctorResultsList) {
	const allDoctors = await fetchAllDoctors;
	allDoctors.forEach(doctor => {
		const indDoctor = document.createElement('li');
		indDoctor.className = 'half item-1';

		indDoctor.innerHTML = `
			<a href="${doctor.doctorPage?._path}" class="flex-top-between-block-500">
				<figure role="presentation">
					<picture>
						<img loading="lazy" alt="" src="${doctor.image?._path}">			
					</picture>
				</figure>
				<div class="info">
					<span class="title-style-5" role="heading" aria-level="3">${doctor.fullName}, <span class="title">${doctor.title}</span></span>
					<div class="specialty-list items-1 note-style-1 ui-repeater" id="PhysicianSearch_ITM0_SpecialtyList">
						<span data-s-i-d="287068" data-item="i" data-key="4048044">
							${doctor.primarySpecialty}
							${doctor.secondarySpecialty ? `, ${doctor.secondarySpecialty}` : ''}
						</span>
					</div>
					<ul class="mar-t-1">				
						<li class="inline-svg phone">
							<svg viewBox="0 0 36 36" data-use="https://www.ouhealth.com/cms/svg/site/icon_phone.36.svg" role="presentation" aria-hidden="true">
							<path d="M29.437 36c-9.078 0-29.432-20.26-29.432-29.292 0-2.265 3.216-5.236 5.437-6.423a2.494 2.494 0 0 1 1.158-0.285c2.23 0 4.573 2.818 6.022 5.46 1.281 2.34 1.72 4.242 1.404 4.74a3.42 3.42 0 0 0-0.462 0.774c-0.169 0.241-0.342 0.471-0.493 0.667-1.135 1.495-1.062 1.569 2.779 5.38l3.168 3.166c2.625 2.638 3.42 3.435 4.074 3.435h0a1.537 1.537 0 0 0 0.951-0.511a6.901 6.901 0 0 1 1.729-1.128a1.374 1.374 0 0 1 0.523-0.081a14.662 14.662 0 0 1 9.099 5.551a3.045 3.045 0 0 1 0.312 3.108c-1.168 2.19-3.97 5.439-6.27 5.439ZM6.665 1.642a1.092 1.092 0 0 0-0.489 0.114c-1.44 0.867-4.588 3.309-4.588 4.95 0 8.028 19.783 27.707 27.852 27.707 1.44 0 4.015-2.862 4.803-4.593a1.488 1.488 0 0 0-0.222-1.476a15.85 15.85 0 0 0-7.284-4.795h-0.06l-0.18 0.066a10.644 10.644 0 0 0-1.938 1.135a2.599 2.599 0 0 1-1.396 0.658c-1.045 0-2.716-1.483-6.895-5.667a42.793 42.793 0 0 1-5.518-6.12c-0.36-1.218 1.098-3.072 1.645-3.78l0.15-0.19c0.244-0.595-1.116-3.153-2.19-4.743C9.512 3.7 7.925 1.642 6.665 1.642Z"></path>
							</svg>${doctor.phoneNumber}
						</li>
						<li class="inline-svg location-info ui-repeater" id="PhysicianSearch_ITM0_ctl09">
							<svg viewBox="0 0 36 36" data-item="i" data-key="" data-use="https://www.ouhealth.com/cms/svg/site/icon_pin.36.svg" role="presentation" aria-hidden="true">
							<path d="M17.211 35.587l-10.046-14.641a13.336 13.336 0 0 1-0.932-13.662a12.918 12.918 0 0 1 11.088-7.27c0.226-0.01 0.451-0.014 0.68-0.014s0.451 0 0.677 0.014a12.906 12.906 0 0 1 11.088 7.27a13.338 13.338 0 0 1-0.932 13.662l-10.046 14.641a0.953 0.953 0 0 1-0.788 0.414A0.951 0.951-31337.645 0 1 17.211 35.587Zm0.191-33.666a11.015 11.015 0 0 0-9.462 6.214a11.455 11.455 0 0 0 0.799 11.733l9.257 13.494l9.266-13.494a11.455 11.455 0 0 0 0.792-11.733a11.03 11.03 0 0 0-9.465-6.214c-0.191 0-0.39-0.01-0.591-0.01S17.601 1.916 17.404 1.924Zm-5.511 11.324a6.119 6.119 0 0 1 6.105-6.109a6.119 6.119 0 0 1 6.109 6.109a6.119 6.119 0 0 1-6.109 6.107A6.119 6.119-31337.645 0 1 11.891 13.245Zm1.909 0a4.196 4.196 0 0 0 4.196 4.196a4.196 4.196 0 0 0 4.196-4.196a4.196 4.196 0 0 0-4.196-4.196A4.196 4.196-31337.645 0 0 13.8 13.245Z"></path>
							</svg>
							<address class="mar-e-0" data-item="i" data-key="">
								<span>
									${doctor.location}
								</span>
							</address>
						</li>
						<li class="new-patients inline-svg ui-repeater" id="PhysicianSearch_ITM0_AcceptingNewPatients">
							<svg viewBox="0 0 36 36" data-item="i" data-key="114341" data-use="https://www.ouhealth.com/cms/svg/site/icon_check.36.svg" role="presentation" aria-hidden="true">
							<path d="M9.204 33.656a17.836 17.836 0 0 1-8.516-10.792a17.75 17.75 0 0 1 1.618-13.64a18.016 18.016 0 0 1 15.716-9.182a18.056 18.056 0 0 1 8.779 2.286a0.964 0.964 0 0 1 0.458 0.59a0.964 0.964 0 0 1-0.087 0.746a0.98 0.98 0 0 1-0.855 0.498a0.922 0.922 0 0 1-0.476-0.128a16.098 16.098 0 0 0-7.83-2.032a16.016 16.016 0 0 0-3.222 0.33a15.915 15.915 0 0 0-10.163 6.864a15.848 15.848 0 0 0-2.334 12.022a16.078 16.078 0 0 0 15.703 12.806a16.182 16.182 0 0 0 3.236-0.332a15.938 15.938 0 0 0 10.172-6.864a15.876 15.876 0 0 0 2.325-12.029a0.956 0.956 0 0 1 0.143-0.73a0.942 0.942 0 0 1 0.621-0.411a0.776 0.776 0 0 1 0.194-0.018a0.97 0.97 0 0 1 0.952 0.774a18.415 18.415 0 0 1 0.363 3.6a18.012 18.012 0 0 1-2.294 8.762a18.038 18.038 0 0 1-15.723 9.182A17.998 17.998-35176.904 0 1 9.204 33.656Zm8.103-11.567l-6.808-6.788a0.984 0.984 0 0 1-0.288-0.693a0.945 0.945 0 0 1 0.288-0.687a0.975 0.975 0 0 1 0.69-0.291a0.956 0.956 0 0 1 0.687 0.291l6.122 6.099l16.329-16.288a0.97 0.97 0 0 1 0.69-0.288a0.969 0.969 0 0 1 0.69 0.28a1.004 1.004 0 0 1 0.288 0.698a0.96 0.96 0 0 1-0.288 0.682l-17.016 16.983a1.008 1.008 0 0 1-0.693 0.28A0.981 0.981-35176.904 0 1 17.31 22.092Z"></path>
							</svg>Member of OU Health Physicians
						</li>			
					</ul>
					<div class="npr-scores ui-repeater" id="PhysicianSearch_ITM0_DocStars">
						<div class="npr-scores-cont" data-item="i" data-key="15680">
							<div class="ds-summary">
								<div class="ds-stars">
									<div class="starz" style="
										background-position: -92% 0;
										background-image: linear-gradient(to right, #ffffff 50%, #f0d283 50%);
										background-size: 200% 100%;"><img src="https://www.ouhealth.com/images/panel/star-ratings.png" alt="">
									</div>
								</div>
								<div class="ds-xofy"><span class="ds-average">${doctor.rating} </span><span class="ds-average-max">out of 5</span></div>
								<div class="ds-ratings"><span class="ds-ratingcount">(${doctor.numberOfRatings})</span> Ratings)</div>				
							</div>
						</div>
					</div>
					<span class="link-style-1 mar-t-1"><img src="https://www.ouhealth.com/images/assets/link-arrow-large.png" alt="View Profile">View Profile</span>
				</div>
			</a>
		`;
		doctorResultsList.appendChild(indDoctor);
	});
}

async function fetchAllDoctors() {
	const aemAuthorUrl = getMetadata('authorUrl') || 'https://author-p53852-e347001.adobeaemcloud.com';
	const aemPublishUrl = getMetadata('publishUrl') || 'https://publish-p53852-e347001.adobeaemcloud.com';
	const persistedQuery = '/graphql/execute.json/ouhealth/doctorsAll';

	const isAuthor = isAuthorEnvironment();
	const url = window?.location?.origin?.includes('author')
		? `${aemAuthorUrl}${persistedQuery};ts=${
			Math.random() * 1000
		}`
		: `${aemPublishUrl}${persistedQuery};ts=${
			Math.random() * 1000
		}`;
	const options = { credentials: 'include' };

	const cfList = await fetch(url, options)
		.then((response) => {
			let data = response.json();
			return data.data.items;
		});

	return cfList;
}

// async function fetchGraphQL(query) {
//     const response = await fetch(GRAPHQL_ENDPOINT, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ query })
//     });
//     const result = await response.json();
//     return result.data.items || [];
//   }

//   async function renderItems() {
//     const items = await fetchGraphQL(QUERY);
//     const container = document.createElement('div');
//     container.id = 'items-container';
  
//     items.forEach(item => {
//       const itemDiv = document.createElement('div');
//       itemDiv.className = 'graphql-item';
//       itemDiv.innerHTML = `
//         <h3>${item.title}</h3>
//         <p>${item.description}</p>
//       `;
//       container.appendChild(itemDiv);
//     });
  
//     document.body.appendChild(container);
//   }
