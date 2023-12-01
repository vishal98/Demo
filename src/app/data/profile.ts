export const ProfileData = [
    {
        columnDisplayName: "What is your gender?",
        columnName: "gender",
        required: true,
        type: "options",
        options:  [
            "Male",
            "Female",
            "Other"
        ], 
        multiSelection: false
    }, {
        columnDisplayName: "What is your ethnicity?",
        columnName: "ethnicity",
        required: true,
        type: "options",
        options:  [
            "White",
            "Mixed or Multiple ethnic groups",
            "Asian or Asian British",
            "Black, African, Caribbean or Black British",
            "Other ethnic group",
        ], 
        multiSelection: false
    }, {
        columnDisplayName: "How would you rate your capabilities (finance, people, products, markets) for managing and growing your business currently?",
        columnName: "currentCapability",
        required: true,
        type: "options",
        options:  [
            "Very strong",
            "Strong",
            "Average",
            "Poor",
            "Very poor"
        ], 
        multiSelection: false
    }, {
        columnDisplayName: "How would you rate your capabilities (finance, people, products, markets) for managing and growing your business 12 months ago?",
        columnName: "yearCapability",
        required: true,
        type: "options",
        options:  [
            "Very strong",
            "Strong",
            "Average",
            "Poor",
            "Very poor"
        ], 
        multiSelection: false
    }, {
        columnDisplayName: "How would you rate your capabilities in using digital tools to grow your business currently?",
        columnName: "digitalCapability",
        required: true,
        type: "options",
        options:  [
            "Very strong",
            "Strong",
            "Average",
            "Poor",
            "Very poor"
        ], 
        multiSelection: false
    }, {
        columnDisplayName: "How would you rate your capabilities in using digital tools to grow your business 12 months ago?",
        columnName: "yearDigitalCapability",
        required: true,
        type: "options",
        options:  [
            "Very strong",
            "Strong",
            "Average",
            "Poor",
            "Very poor"
        ], 
        multiSelection: false
    }
]