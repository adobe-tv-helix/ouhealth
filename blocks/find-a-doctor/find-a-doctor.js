/**
 *
 * @param {Element} block
 */
export default async function decorate(block) {
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
						<span class="filter-show" data-role="btn">Show Advanced Filters</span><span class="filter-hide" data-role="btn">Hide Advanced Filters</span></a>
					<a aria-label="click to clear existing filters" href="javascript:void('ClearAll');" class="link-style-2 clear-filters">Clear Filters</a>
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
    block.appendChild(searchResults);

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
