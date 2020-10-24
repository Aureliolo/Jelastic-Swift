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
			                ],

                        "custom":[

			                {
			                    "name": "OS_USERNAME",
			                    "caption": "OS_USERNAME",
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
			                    "caption": "REGION_NAME",
			                    "type": "string",
			                    "required": true,
			                    "default": "RegionOne"
			                },
			                {
			                    "name": "CT_NAME",
			                    "caption": "CT_NAME",
			                    "type": "string",
			                    "required": true,
			                    "default": "sb_project_SBI-"
			                },
			                {
			                    "name": "OS_PROJECT_NAME",
			                    "caption": "OS_PROJECT_NAME",
			                    "type": "string",
			                    "required": true,
			                    "default": "sb_project_SBI-"
			                },
			                {
			                    "name": "DOMAIN",
			                    "caption": "DOMAIN",
			                    "type": "string",
			                    "required": true,
			                    "default": "default"
			                },
			                {
			                    "name": "KEYSTONE-V3-HOST",
			                    "caption": "KEYSTONE-V3-HOST",
			                    "type": "string",
			                    "required": true,
			                    "default": "swiss-backup.infomaniak.com:443"
			                }
                            ]
                    }
                }
            ]
        }
    }
};
