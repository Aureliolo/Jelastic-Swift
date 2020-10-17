return {
    result: 0,
    "settings": {
        "main": {
            "fields": [
	               {
                    "name": "mode",
                    "caption": "What Swift Backend do you use?",
                    "type": "radio-fieldset",
                    "values": {
                        "swiss-backup": "Swiss Backup",
                        "custom": "Custom"
                    },
                    "default": "swiss-backup",

                    "showIf": {
                        "swiss-backup": [

			                {
			                    "name": "OS_USERNAME",
			                    "caption": "Swiss Backup username",
			                    "type": "string",
			                    "required": true,
			                    "default": "SBI-"
			                }, 
			                {
			                    "name": "OS_PASSWORD",
			                    "caption": "Password",
			                    "type": "string",
			                    "required": true,
			                    "inputType": "password"
			                },
			                {
			                    "name": "REGION_NAME",
			                    "type": "string",
			                    "required": true,
			                    "hidden": true,
			                    "hideLabel": true,
			                    "default": "RegionOne"
			                },
			                {
			                    "name": "CT_NAME",
			                    "type": "string",
			                    "required": true,
			                    "hidden": true,
			                    "hideLabel": true,
			                    "default": "sb_project_SBI-AA177274"
			                },
			                {
			                    "name": "OS_PROJECT_ID",
			                    "type": "string",
			                    "required": true,
			                    "hidden": true,
			                    "hideLabel": true,
			                    "default": "default"
			                },
			                {
			                    "name": "KEYSTONE-V3-URL",
			                    "type": "string",
			                    "required": true,
			                    "hidden": true,
			                    "hideLabel": true,
			                    "default": "//swift01-api.cloud.infomaniak.ch/identity/v3/"
			                }
			                ],

                        "custom":[

			                {
			                    "name": "OS_USERNAME",
			                    "caption": "Swiss Backup username",
			                    "type": "string",
			                    "required": true,
			                    "default": "SBI-"
			                }, 
			                {
			                    "name": "OS_PASSWORD",
			                    "caption": "Password",
			                    "type": "string",
			                    "required": true,
			                    "inputType": "password"
			                },
			                {
			                    "name": "REGION_NAME",
			                    "type": "string",
			                    "required": true,
			                    "default": "RegionOne"
			                },
			                {
			                    "name": "CT_NAME",
			                    "type": "string",
			                    "required": true,
			                    "default": "sb_project_SBI-AA177274"
			                },
			                {
			                    "name": "OS_PROJECT_ID",
			                    "type": "string",
			                    "required": true,
			                    "default": "default"
			                },
			                {
			                    "name": "KEYSTONE-V3-URL",
			                    "type": "string",
			                    "required": true,
			                    "default": "//swift01-api.cloud.infomaniak.ch/identity/v3/"
			                }
                            ]

                    }
                }
            ]
        }
    }
};
