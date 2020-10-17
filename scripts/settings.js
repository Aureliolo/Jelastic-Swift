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
			                    "name": "User",
			                    "caption": "Swiss Backup username",
			                    "type": "string",
			                    "required": true,
			                    "default": "SBI-"
			                }, 
			                {
			                    "name": "key",
			                    "caption": "Password",
			                    "type": "string",
			                    "required": false,
			                    "inputType": "password"
			                }
                            ],

                        "custom":[

			                {
			                    "name": "User",
			                    "caption": "Swiss Backup username",
			                    "type": "string",
			                    "required": true,
			                    "default": "SBI-"
			                }, 
			                {
			                    "name": "key",
			                    "caption": "Password",
			                    "type": "string",
			                    "required": false,
			                    "inputType": "password"
			                }
                            ]

                    }
                }
            ]
        }
    }
};
