import org.yaml.snakeyaml.Yaml;

var resp = jelastic.environment.control.GetEnvs(appid, session);

return {
    result: 0,
    "settings": {
        "main": {
            "fields": [
	               {
                    "name": "mode",
                    "caption": "What Swift Backend do you use?"
                    "type": "radio-fieldset",
                    "values": {
                        "swiss-backup": "Swiss Backup",
                        "custom": "Custom"
                    },
                    "default": "swiss-backup",
                    "showIf": {
                        "swiss-backup": [{
 
                            },
			                {
			                    "name": "User",
			                    "caption": "Swiss Backup username",
			                    "type": "string",
			                    "required": true,
			                    "default": "SBI-"
			                }, {
			                    "name": "key",
			                    "caption": "Password",
			                    "type": "string",
			                    "required": false,
			                    "inputType": "password"
			                },
                            }
                        ],


                        "custom": [{
                                "caption": "__________________________________________________________________________________",
                                "cls": "x-item-disabled",
                                "type": "displayfield",
                                "name": "exemple",
                                "hidden": false
                            },

                            {
                                "type": "compositefield",
                                "hideLabel": true,
                                "pack": "center",
                                "name": "wp_protect",
                                "items": [{
                                    "type": "displayfield",
                                    "cls": "x-item-disabled",
                                    "value": "<h3>Backup configuration</h3>",
                                }]
                            },

                            {
                                "name": "choice",
                                "type": "radio-fieldset",
                                "values": [{
                                        "value": "full",
                                        "caption": "Back up all files"

                                    },
                                    {
                                        "value": "folder",
                                        "caption": "Back up specific folders"
                                    }
                                ],
                                "default": "full",
                                "showIf": {
                                    "full": [{
                                        "type": "displayfield",
                                        "cls": "x-item-disabled",
                                        "markup": "Some system files will be excluded. See our FAQ <a target='_blank' href='https://www.infomaniak.com/fr'>Add-on SwissBackup</a> for more detail.",
                                        "name": "info",
                                        "hidden": false
                                    }],
                                    "folder": [{
                                        "name": "path",
                                        "caption": "Folders to back up",
                                        "regex": "[^s/ *]",
                                        "regexText": "Use Snapshot of the whole container button for backup / ",
                                        "type": "string",
                                        "placeholder": "path/to/folder1/, path/to/folder2/, path/to/folderX"
                                    }]
                                }
                            },
                            {
                                "pack": "",
                                "align": "",
                                "defaultMargins": {
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0,
                                    "left": 20
                                },
                                "defaultPadding": 0,
                                "defaultFlex": 0,
                                "caption": "Retention period",
                                "tooltip": "See our FAQ for more details",
                                "hideLabel": false,
                                "type": "compositefield",
                                "name": "compositefield",
                                "hidden": false,
                                "items": [{
                                        "type": "displayfield",
                                        "height": 5,
                                        "hideLabel": true,
                                        "markup": "Years"
                                    },

                                    {
                                        "width": 37,
                                        "name": "year",
                                        "regex": "^[0-9]$|^[0-9][0-99]$",
                                        "regexText": "0-99",
                                        "type": "string",
                                        "default": "0",
                                        "required": "true",
                                        "hidden": false
                                    },
                                    {
                                        "type": "displayfield",
                                        "height": 5,
                                        "hideLabel": true,
                                        "markup": "Months"
                                    },


                                    {
                                        "width": 37,
                                        "name": "month",
                                        "regex": "^[0-9]$|^[0-9][0-99]$",
                                        "regexText": "0-99",
                                        "type": "string",
                                        "default": "0",
                                        "required": "true",
                                        "hidden": false
                                    },
                                    {
                                        "type": "displayfield",
                                        "height": 5,
                                        "hideLabel": true,
                                        "markup": "Days"
                                    },

                                    {
                                        "width": 37,
                                        "name": "day",
                                        "regex": "^[0-9]$|^[0-9][0-99]$",
                                        "regexText": "0-99",
                                        "type": "string",
                                        "default": "0",
                                        "required": "true",
                                        "hidden": false
                                    },


                                    {
                                        "type": "displayfield",
                                        "height": 5,
                                        "hideLabel": true,
                                        "markup": "Hours"
                                    },
                                    {
                                        "width": 37,
                                        "name": "hour",
                                        "regex": "^[0-9]$|^[0-9][0-99]$",
                                        "regexText": "0-99",
                                        "type": "string",
                                        "default": "0",
                                        "required": "true",
                                        "hidden": false
                                    }

                                ]
                            },
                            {
                                "type": "list",
                                "name": "sauvegarde",
                                "caption": "Backup frequency",
                                "tooltip": "See our FAQ <a target='_blank' href='https://www.infomaniak.com/fr'>Add-on SwissBackup</a> section back up frequency",
                                "values": {
                                    "daily": "Daily",
                                    "hourly": "Hourly"

                                },
                                "hideLabel": false,
                                "hidden": false,
                                "editable": false,
                                "default": "daily",
                                "required": true
                            }
                        ],

                    }
                }
            ]
        }
    }
}



settings:
  main:
    fields:
      - type: string
        name: user
        caption: Username
        default: SBI-
        required: true
      - type: string
        name: key
        caption: Password
        required: true
        inputType: password
      - type: string
        name: swift-url
        caption: Openstack Swift URL
        default: SBI-
        required: true
      - type: string
        name: user
        caption: Swiss Backup username
        default: SBI-
        required: true