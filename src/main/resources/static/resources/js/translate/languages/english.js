/**
 * 
 */
angular.module('app.translate-config-en', ['pascalprecht.translate'])
.config(function ($translateProvider) {
	$translateProvider.translations('en',  {
	    "index": {
	    	"login": "Login",
	    	"logout": "Logout",
	    	"contact": "Contact",
	    	"welcome": "Welcome",
	    	"registerSpecialist":"Are you a specialist?",
	    	"language_EN": "english",
	    	"language_PL": "polski",
	    	"about_portal":"About portal",
	    	"physiotherapy" : "Physiotherapy",
	    	"specialists" : "Specialists",
	    	"tips" : "Tips",
	    	"timetable" : "Timetable",
	    	"add_a_visit" : "Add a visit",
	    	"visits" : "Visits",
	    	"patients" : "Patients",
	    	"account" : "Account",
	    	"add_services" : "Add service",
	    	"management" : "Management",
	    },
	    "patients": {
	    	"patients" : "Patients",
	    	"search_patient" : "Search for a patient",
	    	"search" : "Search",
	    	"add_patient" : "Add patient",
	    	"firstName_lastName" : "First name and last name",
	    	"gender" : "Gender",
	    	"date_of_birth" : "Date of birth",
	    	"phone" : "Phone",
	    	"last_visit" : "Last visit",
	    	"actions" : "Actions",
	    	"man" : "man",
	    	"woman" : "woman",
	    	"add_a_visit" : "Add a visit",
	    	"remove_the_patient" : "Remove the patient",
	    	"send_email" : "Send email",
	    	"want_to_remove_the_patient" : "Are you sure you want to remove the patient?",
	    	"" : "",
	    	"" : "",
	    	"" : "",
	    	"" : "",
	    },
		"addVisit" : {
			"add_new_visit":"Add a new visit",
			"correct_add_visit" : "Correctly added visit",
			"visit_length":"Duration of visit",
			"what_visit_length":"Specify the duration of the visit",
			"visit_description" : "Visit description",
			"recommendations_after_the_visit" : "Recommendations after the visit",
		},
		"visits" : {
			"visits":"Visits",
			"finish_the_visit":"Finish the visit",
			"delete_the_visit":"Delete the visit",
			"want_delete_visit":"Are you sure you want to delete the visit?",
			"":"",
			"":"",
			"":"",
		},
		"patient" : {
			"last_visit" : "Last visit",
			"see_visit": "Zobacz wizyty",
			"add_reservation" : "Add a reservation",
			"correct_patient_data_corrected":"Correct patient data corrected",
			"patient_profile" : "Patient profile",
			"patient_description" : "Opis pacjenta",
			"add_an_interview" : "Add an interview",
			"interviews" : "Interviews",
		},
		"addService" : {
			"add_new_service" : "Add a new service",
			"correct_add_service" : "Correctly added visit",
			"service_name" : "Service name",
			"service_description" : "Service description",
			"please_correct_price" : "Please enter a valid amount",
			"" : "",
			"" : "",
		},
		"interview" : {
			"add_an_interview" : "Add an interview",
			"kind_of_pain" : "Kind od pain",
			"place_of_pain" : "Place of pain",
			"choose_the_type_of_pain" : "Choose the type of pain",
			"choose_a_place_of_pain" : "Choose a place of pain",
		},
		"visit" : {
			"date_of_visit" : "Date of visit",
			"select_patient_from_list" : "select patient from the list",
		},
		"contact" : {
			"subject" : "Sucject",
			"select_subject" : "Select subject",
			"message" : "Message",
		},
		"login" : {
			"welcome_login_page" : "Welcome to the login page",
			"access_to_virtual_physiotherapy" : "Access to virtual physiotherapy. If you have an account, Enter your email address and password below and if you do not have one",
			"create_new_account" : "Create new account",
			"error" : "Error",
			"incorrect_login_or_password" : "Incorrect login or password.",
			"try_again" : "Try again",
			"login_is_required" : "Login is required",
			"password" : "Password",
			"password_is_required" : "Password is required",
		},
		"account" : {
			"account" : "Account",
			"account_details" : "Szczegóły konta",
			"for_short_login" : "For a short login",
			"for_long_login" : "For a long login",
		},
		"commons" : {
			"success" : "Success",
			"save" : "Save",
			"cancel" : "Cancel",
			"clear" : "Clear",
			"name" : "Name",
			"login": "Login",
			"firstname" : "First name",
			"lastName" : "Last name",
			"address" : "Address",
			"date_of_birth" : "Date of birth",
			"description" : "Description",
			"man" : "mężczyzna",
	    	"woman" : "kobieta",
			"price" : "Price",
			"city" : "City",
			"select" : "Select",
			"street" : "Street",
			"number" : "Number",
			"postcode" : "Post code",
			"patient" : "Patient",
			"date" : "Date",
			"hour" : "Hour",
			"age" : "Age",
			"gender" : "Gender",
			"type" : "Type",
			"pesel" : "Pesel",
			"phone" : "Phone",
			"contents" : "Contents",
			"additional_information" : "Additional information",
			"actions" : "Actions",
			"send_email" : "Send email",
			"select_Patient" : "Select patient",
			"select_date" : "Choose a date",
			"select_hour" : "Select hour",
			"select_service" : "Select service",
			"services" : "Services",
			"name_is_required" : "Name is required",
			"firstname_is_required" : "First name is required",
			"lastname_is_required" : "Last name is required",
			"price_is_required":"Price is required",
			"date_of_birth_required" : "Data urodzenia jest wymagana",
			"phone_is_required" : "Phone is required",
			"email_is_required" : "E-mail is required",
			"incorrect_email" : "Incorrect e-mail",
			"postcode_is_required" : "Post code is required",
			"city_is_required" : "City is required",
			"pesel_is_required" : "Pesel is required",
			"please_enter_valid_postcode" : "Please enter a valid zip code",
			"changes_have_been_saved" : "Changes have been saved",
		}
	 })
})