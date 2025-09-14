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
								<input id="PhysicianSearch_HDR0_PhysicianName" autocomplete="off" type="text" placeholder="Doctor Name" class="ui-cms-input" name="PhysicianSearch$HDR0$PhysicianName" value="" data-history="PhysicianName" data-search="true">
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
				<fieldset class="search-form advanced-search" style="display:none" aria-hidden="true" data-role="panel">
					<legend>Provider Advanced Search</legend>
					<ul class="flex-between-grid-spaced-break-1024-block-800-wrap full">
						<li class="search auto third">
							<label for="PhysicianSearch_HDR0_Keywords" id="LabelKeyword">Keyword</label>
							<div class="input-text key-search-start">
								<input id="PhysicianSearch_HDR0_Keywords" autocomplete="off" type="text" placeholder="Keyword Term" class="ui-cms-input" name="PhysicianSearch$HDR0$Keywords" value="" data-history="Keywords" data-history-qs="Keyword" data-search="true">
							</div>
						</li>
						<li class="select auto third">
							<label for="PhysicianSearch_HDR0_LanguageIDs" id="LabelLanguage">Languages Spoken</label>
							<div class="input-text">
								<select id="PhysicianSearch_HDR0_LanguageIDs" autocomplete="off" class="ui-cms-select ui-cms-input" name="PhysicianSearch$HDR0$LanguageIDs" data-history="LanguageIDs" data-history-qs="Languages" data-search="true">
									<option value="" selected="">Select</option>
									<option value="43139">Arabic</option><option value="43140">Cantonese</option><option value="46034">English</option><option value="58508">Farsi</option><option value="43142">French</option><option value="48670">German</option><option value="57162">Greek</option><option value="43143">Gujarati</option><option value="58539">Hebrew</option><option value="43144">Hindi</option><option value="58604">Japanese</option><option value="43145">Malayalam</option><option value="51978">Mandarin Chinese</option><option value="58551">Pashto</option><option value="47126">Polish</option><option value="47125">Portuguese</option><option value="43146">Punjabi</option><option value="58665">Romanian</option><option value="43147">Russian</option><option value="43148">Spanish</option><option value="43149">Swedish</option><option value="58548">Taiwanese</option><option value="43150">Telugu</option><option value="58065">Thai</option><option value="57625">Turkish</option><option value="43151">Urdu</option><option value="58698">Vietnamese</option>
								</select>
								<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_caret_down.36.svg" role="presentation" aria-hidden="true" tabindex="-1">
									
								
	<path d="M14.715 25.405c-0.098-0.168 3.245 3.018 3.288 3.047l3.107-3.047l14.89-14.653c0.051-0.03-0.83-0.812-1.715-1.695a14.161 14.161 0 0 0-1.485-1.506L18.005 22.352l-14.799-14.799c0.02 0-0.735 0.701-1.622 1.584s-1.622 1.598-1.581 1.622Z"></path>
</svg>
							</div>
						</li>
						<li class="select auto third hide">
							<label for="PhysicianSearch_HDR0_InsuranceIDs" id="LabelInsurance">Accepted Insurance</label>
							<div class="input-text">
								<select id="PhysicianSearch_HDR0_InsuranceIDs" autocomplete="off" class="ui-cms-select ui-cms-input" name="PhysicianSearch$HDR0$InsuranceIDs" data-history="InsuranceIDs" data-history-qs="Insurances" data-search="true">
									<option value="" selected="">Select</option>
									<option value="1839">Aetna</option><option value="1840">Cigna</option>
								</select>
								<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_caret_down.36.svg" role="presentation" aria-hidden="true" tabindex="-1">
									
								
	<path d="M14.715 25.405c-0.098-0.168 3.245 3.018 3.288 3.047l3.107-3.047l14.89-14.653c0.051-0.03-0.83-0.812-1.715-1.695a14.161 14.161 0 0 0-1.485-1.506L18.005 22.352l-14.799-14.799c0.02 0-0.735 0.701-1.622 1.584s-1.622 1.598-1.581 1.622Z"></path>
</svg>
							</div>
						</li>
						<li class="select auto third">
							<label for="PhysicianSearch_HDR0_AffiliationIDs" id="LabelLocation">Location Affiliation</label>
							<div class="input-text">
								<select id="PhysicianSearch_HDR0_AffiliationIDs" autocomplete="off" class="ui-cms-select ui-cms-input" name="PhysicianSearch$HDR0$AffiliationIDs" data-history="AffiliationIDs" data-history-qs="Affiliation" data-search="true">
									<option value="" selected="">Select</option>
									<option value="5468">John W. Keys Speech and Hearing Center – OU College of Allied Health</option><option value="7082">Norman Regional Hospital - Oncology</option><option value="5800">Oklahoma Center for Geroscience</option><option value="3176">Oklahoma Children's Hospital</option><option value="3469">Oklahoma Children's Hospital – Heart Center</option><option value="3470">Oklahoma Children's Hospital – Heart Center Outpatient Cardiology Services</option><option value="3471">Oklahoma Children's Hospital – Jimmy Everest Center for Cancer and Blood Diseases in Children</option><option value="3472">Oklahoma Children's Hospital – Laboratory</option><option value="3486">Oklahoma Children's Hospital – Mother/Baby Unit</option><option value="3365">Oklahoma Children's Hospital – Neonatal Intensive Care Unit</option><option value="3488">Oklahoma Children's Hospital – Obstetrics Emergency Room</option><option value="3489">Oklahoma Children's Hospital – Obstetrics Special Care</option><option value="3476">Oklahoma Children's Hospital – Orthotics &amp; Prosthetics</option><option value="3490">Oklahoma Children's Hospital – Outpatient Surgery</option><option value="3491">Oklahoma Children's Hospital – Pediatric Dialysis</option><option value="3492">Oklahoma Children's Hospital – Pediatric Intensive Care Unit</option><option value="3479">Oklahoma Children's Hospital – Pharmacy</option><option value="3480">Oklahoma Children's Hospital – Prenatal Diagnostic Center</option><option value="3482">Oklahoma Children's Hospital – Radiology</option><option value="3493">Oklahoma Children's Hospital – Rehabilitation Services</option><option value="3494">Oklahoma Children's Hospital – Sleep Disorders Center</option><option value="3477">Oklahoma Children's Hospital — Pediatric Ear, Nose &amp; Throat and Audiology Clinic</option><option value="3467">Oklahoma Children's Hospital — Pediatric Gastroenterology Clinic</option><option value="6619">Oklahoma Children’s Hospital – Norman Specialty Clinic</option><option value="4980">OU Health - Edmond Medical Center – Outpatient Therapy Services</option><option value="3254">OU Health - University of Oklahoma Medical Center</option><option value="5458">OU Health – Adult Outpatient Rehabilitation Services</option><option value="3394">OU Health – Autumn Life Behavioral Center</option><option value="3366">OU Health – Breast Health Network Central</option><option value="3369">OU Health – Breast Health Network Edmond</option><option value="3367">OU Health – Breast Health Network Northwest</option><option value="3368">OU Health – Breast Health Network Southwest</option><option value="3395">OU Health – Edmond Medical Center</option><option value="5872">OU Health – Edmond Medical Center (Medical Office Building) - Outpatient Psychiatry Clinic</option><option value="3397">OU Health – Edmond Medical Center (Medical Office Building) – Edmond Pulmonology Clinic</option><option value="3398">OU Health – Edmond Medical Center (Medical Office Building) – Foot &amp; Ankle of Edmond</option><option value="3583">OU Health – Edmond Medical Center (Medical Office Building) – Orthopedics Clinic</option><option value="6016">OU Health – Edmond Medical Center (Medical Office Building) – Senior Health Clinic</option><option value="3396">OU Health – Edmond Medical Center – Thrive Intensive Outpatient Program (IOP)</option><option value="3498">OU Health – University of Oklahoma Medical Center</option><option value="3515">OU Health – University of Oklahoma Medical Center – Emergency</option><option value="3390">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building)</option><option value="3387">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Adult Services</option><option value="3371">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Ear, Nose &amp; Throat, Plastic Surgery</option><option value="3384">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Imaging &amp; Radiology Services</option><option value="3385">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Infectious Disease Services</option><option value="3386">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Laboratory Services</option><option value="3388">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Medicine Specialty Services</option><option value="3389">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Orthopedic Services</option><option value="3392">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Surgery Sub–Specialty 619</option><option value="3391">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Surgery Sub–Specialty 624</option><option value="3393">OU Health – University of Oklahoma Medical Center Clinics (Professional Office Building) – Women's Services</option><option value="3400">OU Health – University of Oklahoma Medical Center Outpatient Surgery Unit</option><option value="7955">OU Health — Geriatrics at Epworth Villa</option><option value="3380">OU Health Center Nicholson Tower Center on Child Abuse &amp; Neglect</option><option value="3373">OU Health Dentistry</option><option value="8108">OU Health Edmond Medical Center (Medical Office Building) — Back and Neck Clinic</option><option value="7425">OU Health Edmond Medical Center (Medical Office Building) — Gastroenterology Clinic</option><option value="8026">OU Health Edmond Medical Center (Medical Office Building) — Multispecialty Clinic</option><option value="8143">OU Health Edmond Medical Center (Medical Office Building) — Podiatry Clinic</option><option value="6829">OU Health Edmond Medical Center (Medical Office Building) — Sleep Medicine</option><option value="8145">OU Health Edmond Medical Center (Medical Office Building) — Women’s Health Clinic</option><option value="6749">OU Health ER &amp; Urgent Care - Yukon</option><option value="3209">OU Health Harold Hamm Diabetes Center</option><option value="3377">OU Health Harold Hamm Diabetes Center – Adult Diabetes &amp; Endocrinology</option><option value="4039">OU Health Physicians - Adult Congenital Heart Disease Clinic</option><option value="3465">OU Health Physicians - Children's Diabetes &amp; Endocrinology</option><option value="3468">OU Health Physicians - Children's General &amp; Plastic Surgery</option><option value="3585">OU Health Physicians - Children's Healthy Futures</option><option value="3932">OU Health Physicians - Children's Multispecialty Clinic at Mercy</option><option value="3474">OU Health Physicians - Children's Ophthalmology</option><option value="3475">OU Health Physicians - Children's Orthopedic Surgery</option><option value="3481">OU Health Physicians - Children's Pulmonology &amp; Cystic Fibrosis</option><option value="3484">OU Health Physicians - Children's Urology</option><option value="5823">OU Health Physicians - Community Health Clinic</option><option value="3466">OU Health Physicians - Family Dentistry</option><option value="4013">OU Health Physicians - Gastroenterology Clinic</option><option value="3473">OU Health Physicians - Pediatric Neurology</option><option value="3478">OU Health Physicians - Pediatric Specialties</option><option value="3483">OU Health Physicians - Sooner Pediatrics</option><option value="3464">OU Health Physicians – Adolescent Medicine</option><option value="5165">OU Health Physicians – Advanced Heart Clinic</option><option value="3404">OU Health Physicians – Cardiology, Pulmonary &amp; Vascular Medicine Clinic</option><option value="3405">OU Health Physicians – Cardiovascular Diagnostics Clinic</option><option value="3406">OU Health Physicians – Ear, Nose &amp; Throat Clinic</option><option value="3407">OU Health Physicians – General Surgery Clinic</option><option value="3408">OU Health Physicians – GI Endoscopy Clinic</option><option value="3409">OU Health Physicians – Health &amp; Wellness Clinic</option><option value="3410">OU Health Physicians – Internal Medicine Clinic</option><option value="3411">OU Health Physicians – Laboratory</option><option value="3582">OU Health Physicians – Metabolic &amp; Bariatric Surgery Clinic</option><option value="3412">OU Health Physicians – Neurology Clinic</option><option value="3378">OU Health Physicians – Neurosurgery Clinic</option><option value="3413">OU Health Physicians – Orthopedic Surgery Clinic</option><option value="3414">OU Health Physicians – Pain Medicine Clinic</option><option value="3379">OU Health Physicians – Pediatric Neurosurgery Clinic</option><option value="3415">OU Health Physicians – Pharmacy</option><option value="3416">OU Health Physicians – Plastic Surgery Clinic</option><option value="4030">OU Health Physicians – Podiatry Clinic</option><option value="3511">OU Health Physicians – Psychiatry Clinic</option><option value="3417">OU Health Physicians – Radiology</option><option value="5004">OU Health Physicians – Rheumatology Clinic</option><option value="3555">OU Health Physicians – Senior Health Clinic</option><option value="3418">OU Health Physicians – Urology Clinic</option><option value="3419">OU Health Physicians – Women's Health Clinic</option><option value="3420">OU Health Physicians – Women's Pelvic &amp; Bladder Health Center</option><option value="3421">OU Health Physicians – Women's Specialty Clinic</option><option value="7203">OU Health Physicians — Memory Care Clinic</option><option value="6898">OU Health Physicians — Nephrology Clinic</option><option value="8310">OU Health Physicians — Surgery Clinic</option><option value="3402">OU Health Physicians Building - Oklahoma City</option><option value="3422">OU Health Physicians Canyon Park Family Medicine Clinic</option><option value="3423">OU Health Physicians Child Study Center</option><option value="3424">OU Health Physicians Community Health Clinic NE</option><option value="3425">OU Health Physicians Community Health Clinic South</option><option value="3382">OU Health Physicians Community Pediatrics Clinic SW</option><option value="3426">OU Health Physicians Dermatology Clinic</option><option value="3374">OU Health Physicians Family Medicine Center OKC</option><option value="3375">OU Health Physicians Family Medicine Center Tulsa</option><option value="3427">OU Health Physicians Fountain Lake</option><option value="3943">OU Health Physicians Fountain Lake - Surgery Clinic</option><option value="3430">OU Health Physicians Fountain Lake – Family Medicine Clinic</option><option value="3428">OU Health Physicians Fountain Lake – Urology Clinic</option><option value="8053">OU Health Physicians Fountain Lake — Sooner Pediatrics North</option><option value="3376">OU Health Physicians Garrison Tower Oklahoma Infant Transition Program</option><option value="3383">OU Health Physicians Grand Prairie Pediatrics</option><option value="3431">OU Health Physicians Health &amp; Wellness Clinic at UCO</option><option value="3433">OU Health Physicians Reproductive Medicine</option><option value="3434">OU Health Physicians South Memorial</option><option value="3462">OU Health Physicians Super Niños Clinic</option><option value="3463">OU Health Physicians Surgical Specialist</option><option value="4029">OU Health Physicians Surgical Specialists – Metabolic &amp; Bariatric Surgery Clinic</option><option value="3435">OU Health Physicians Waterview Park</option><option value="3401">OU Health Physicians Waterview Park - MRI</option><option value="3495">OU Health Physicians Wayman Tisdale Clinic</option><option value="4043">OU Health Physicians Wayman Tisdale Clinic - Pediatric Clinic</option><option value="4042">OU Health Physicians Wayman Tisdale Clinic - Pediatric Urology</option><option value="3507">OU Health Physicians Wayman Tisdale Clinic – Internal Medicine Clinic</option><option value="3439">OU Health Physicians Wayman Tisdale Clinic – Nephrology Clinic</option><option value="3502">OU Health Physicians Wayman Tisdale Clinic – Neurology Clinic</option><option value="3509">OU Health Physicians Wayman Tisdale Clinic – Social Services Clinic</option><option value="8133">OU Health Primary Care Edmond — Family Medicine Clinic</option><option value="8106">OU Health Primary Care Edmond — Sooner Pediatrics North</option><option value="3298">OU Health Stephenson Cancer Center</option><option value="3584">OU Health Stephenson Cancer Center - Bone &amp; Soft Tissue Cancers Clinic</option><option value="3447">OU Health Stephenson Cancer Center – Brain Tumor Clinic</option><option value="3448">OU Health Stephenson Cancer Center – Breast Cancer Clinic</option><option value="3449">OU Health Stephenson Cancer Center – Cancer Rehabilitation Clinic</option><option value="5876">OU Health Stephenson Cancer Center – Cardio-Oncology Clinic</option><option value="3460">OU Health Stephenson Cancer Center – Chemotherapy</option><option value="3450">OU Health Stephenson Cancer Center – Colon &amp; Rectal Cancer Clinic</option><option value="3451">OU Health Stephenson Cancer Center – Gastrointestinal Cancer Clinic</option><option value="7309">OU Health Stephenson Cancer Center – Geriatric Oncology Clinic</option><option value="3452">OU Health Stephenson Cancer Center – Gynecologic Cancer Clinic</option><option value="3453">OU Health Stephenson Cancer Center – Head &amp; Neck Cancer Clinic</option><option value="3459">OU Health Stephenson Cancer Center – Imaging &amp; Radiology</option><option value="4245">OU Health Stephenson Cancer Center – Interventional Radiology Clinic</option><option value="3461">OU Health Stephenson Cancer Center – Laboratory</option><option value="3457">OU Health Stephenson Cancer Center – Oklahoma TSET Phase I Program</option><option value="3556">OU Health Stephenson Cancer Center – Pharmacy</option><option value="3445">OU Health Stephenson Cancer Center – Prostate &amp; Urologic Cancer Clinic</option><option value="3458">OU Health Stephenson Cancer Center – Radiation Therapy</option><option value="3455">OU Health Stephenson Cancer Center – Skin Cancer Clinic</option><option value="3454">OU Health Stephenson Cancer Center – Survivorship &amp; Supportive Care Clinic</option><option value="3456">OU Health Stephenson Cancer Center – Thoracic Cancer Clinic</option><option value="3446">OU Health Stephenson Cancer Center – Transplant &amp; Cellular Therapy Clinic</option><option value="8014">OU Health Stephenson Cancer Center — Oncology Nutrition Services</option><option value="8057">OU Health Stephenson Cancer Center — Palliative Care Clinic</option><option value="8064">OU Health Stephenson Cancer Center at Hillcrest — Blood Draw and Laboratory</option><option value="8066">OU Health Stephenson Cancer Center at Hillcrest — Infusion Center</option><option value="8065">OU Health Stephenson Cancer Center at Hillcrest — Medical Oncology Clinic</option><option value="8342">OU Health Stephenson Cancer Center at Norman Regional — Medical Oncology Clinic</option><option value="3381">OU Health Transplant Center</option><option value="4041">OUP Fountain Lake - Pediatric Urology</option><option value="5003">Rockpointe Medical Clinic</option><option value="3436">Schusterman Center</option><option value="3503">Schusterman Center – Adolescent Medicine Clinic</option><option value="3442">Schusterman Center – Children's Heart Care Clinic</option><option value="3438">Schusterman Center – Internal Medicine Clinic</option><option value="3437">Schusterman Center – OU Health Harold Hamm Diabetes &amp; Endocrinology Clinic</option><option value="3514">Schusterman Center – Pediatric Gastroenterology Clinic</option><option value="3510">Schusterman Center – Pediatric Infectious Diseases Clinic</option><option value="6605">Schusterman Center – Pediatric Nephrology</option><option value="5873">Schusterman Center – Pediatric Neurosciences Clinic</option><option value="3501">Schusterman Center – Pediatric Psychiatry Clinic</option><option value="3441">Schusterman Center – Pediatrics Clinic</option><option value="3557">Schusterman Center – Pharmacy Clinic</option><option value="3443">Schusterman Center – Psychiatry Clinic</option><option value="3444">Schusterman Center – Surgery Procedures Clinic</option><option value="3440">Schusterman Center – Women's Health Care Specialists Clinic</option><option value="4040">Waterview Park - Pediatric Urology</option><option value="3497">Youth Services of Tulsa – Fostering Hope of Tulsa Clinic</option>
								</select>
								<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_caret_down.36.svg" role="presentation" aria-hidden="true" tabindex="-1">
									
								
	<path d="M14.715 25.405c-0.098-0.168 3.245 3.018 3.288 3.047l3.107-3.047l14.89-14.653c0.051-0.03-0.83-0.812-1.715-1.695a14.161 14.161 0 0 0-1.485-1.506L18.005 22.352l-14.799-14.799c0.02 0-0.735 0.701-1.622 1.584s-1.622 1.598-1.581 1.622Z"></path>
</svg>
							</div>
						</li>
						<li class="select auto third hide">
							<label for="PhysicianSearch_HDR0_City" id="LabelCity">Location City</label>
							<div class="input-text">
								<select id="PhysicianSearch_HDR0_City" autocomplete="off" class="ui-cms-select ui-cms-input" name="PhysicianSearch$HDR0$City" data-history="City" data-search="true">
									<option value="" selected="">Select</option>
									<option value="Edmond">Edmond</option><option value="Norman">Norman</option><option value="Oklahoma City">Oklahoma City</option><option value="Tulsa">Tulsa</option>
								</select>
								<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_caret_down.36.svg" role="presentation" aria-hidden="true" tabindex="-1">
									
								
	<path d="M14.715 25.405c-0.098-0.168 3.245 3.018 3.288 3.047l3.107-3.047l14.89-14.653c0.051-0.03-0.83-0.812-1.715-1.695a14.161 14.161 0 0 0-1.485-1.506L18.005 22.352l-14.799-14.799c0.02 0-0.735 0.701-1.622 1.584s-1.622 1.598-1.581 1.622Z"></path>
</svg>
							</div>
						</li>
						<li class="third auto non-margin">
							<ul class="flex-wrap-spaced loc-distance">
								<li class="full">
									<label for="PhysicianSearch_HDR0_Distance" id="LabelDistance">Location Distance</label>
								</li>
								<li class="distance select half">
									<div class="input-text flex-between-middle-flex">
										<span>Within</span>
										<div class="three-fifths">
											<select id="PhysicianSearch_HDR0_Distance" autocomplete="off" class="ui-cms-select ui-cms-input" name="PhysicianSearch$HDR0$Distance" data-history="Distance" data-search="true">
												<option value="5" selected="">5</option>
												<option value="10">10</option>
												<option value="25">25</option>
												<option value="50">50</option>
											</select>
											<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_caret_down.36.svg" role="presentation" aria-hidden="true" tabindex="-1">
												
											
	<path d="M14.715 25.405c-0.098-0.168 3.245 3.018 3.288 3.047l3.107-3.047l14.89-14.653c0.051-0.03-0.83-0.812-1.715-1.695a14.161 14.161 0 0 0-1.485-1.506L18.005 22.352l-14.799-14.799c0.02 0-0.735 0.701-1.622 1.584s-1.622 1.598-1.581 1.622Z"></path>
</svg>
										</div>
									</div>
								</li>
								<li class="zip-code search half">
									<div class="input-text flex-between-middle-flex">
										<span>Miles Of</span>
										<div class="three-fifths">
											<label class="ninja" for="PhysicianSearch_HDR0_ZipCodeSearch">Zip Code</label>
											<div class="input-text">
												<input aria-label="search by zip code" id="PhysicianSearch_HDR0_ZipCodeSearch" autocomplete="off" placeholder="Zip Code" type="text" class="ui-cms-input" name="PhysicianSearch$HDR0$ZipCodeSearch" value="" data-history="ZipCodeSearch" data-search="true">
											</div>
										</div>
									</div>
									
								</li>
							</ul>
						</li>
						<li class="select auto third hide">
							<label for="PhysicianSearch_HDR0_InterestIDs" id="LabelInterest">Professional Society Affiliation</label>
							<div class="input-text">
								<select id="PhysicianSearch_HDR0_InterestIDs" autocomplete="off" class="ui-cms-select ui-cms-input" name="PhysicianSearch$HDR0$InterestIDs" data-history="InterestIDs" data-history-qs="Interest" data-search="true">
									<option value="" selected="">Select</option>
									<option value="134">Interest 1</option><option value="135">Interest 2</option>
								</select>
								<svg viewBox="0 0 36 36" data-use="/cms/svg/site/icon_caret_down.36.svg" role="presentation" aria-hidden="true" tabindex="-1">
									
								
	<path d="M14.715 25.405c-0.098-0.168 3.245 3.018 3.288 3.047l3.107-3.047l14.89-14.653c0.051-0.03-0.83-0.812-1.715-1.695a14.161 14.161 0 0 0-1.485-1.506L18.005 22.352l-14.799-14.799c0.02 0-0.735 0.701-1.622 1.584s-1.622 1.598-1.581 1.622Z"></path>
</svg>
							</div>
						</li>
						<li class="check-con third auto flex-bottom">
							<div class="input-text check-box">
								<input id="PhysicianSearch_HDR0_NewPatientsOnly" type="checkbox" aria-labelledby="LabelNewPat" aria-label="New Patients Only" class="cms ui-cms-input" autocomplete="off" name="PhysicianSearch$HDR0$NewPatientsOnly" data-history="NewPatientsOnly" data-search="true">
								<label for="PhysicianSearch_HDR0_NewPatientsOnly" class="check-replace"></label>
							</div>
							<label class="hide" for="PhysicianSearch_HDR0_NewPatientsOnly" id="LabelNewPat">Only Show Doctors Accepting New Patients</label>
							<span>Only Show Doctors Accepting New Patients</span>
						</li>
						<li class="check-con third auto flex-bottom">
							<div class="input-text check-box">
								<input id="PhysicianSearch_HDR0_MedicalGroup" type="checkbox" aria-labelledby="LabelMedicalGroup" aria-label="Only Show Providers with Photos" class="cms ui-cms-input" autocomplete="off" name="PhysicianSearch$HDR0$MedicalGroup" data-history="MedicalGroup" data-search="true">
								<label for="PhysicianSearch_HDR0_MedicalGroup" class="check-replace"></label>
							</div>
							<label class="hide" for="PhysicianSearch_HDR0_MedicalGroup" id="LabelMedicalGroup">Only Show OU Health Physician Members</label>
							<span>Only Show OU Health Physician Members</span>
						</li>
						<li class="check-con auto flex-bottom">
							<div class="input-text check-box">
								<input id="PhysicianSearch_HDR0_HasPhoto" type="checkbox" aria-labelledby="LabelPhoto" aria-label="Only Show Providers with Photos" class="cms ui-cms-input" autocomplete="off" name="PhysicianSearch$HDR0$HasPhoto" data-history="HasPhoto" data-search="true">
								<label for="PhysicianSearch_HDR0_HasPhoto" class="check-replace"></label>
							</div>
							<label class="hide" for="PhysicianSearch_HDR0_HasPhoto" id="LabelPhoto">Only Show Doctors with Photos</label>
							<span>Only Show Doctors with Photos</span>
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