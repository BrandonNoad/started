import {
    QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS,
    QUESTIONNAIRE_SECTION_ID_TREATMENT,
    QUESTIONNAIRE_SECTION_ID_NON_INSTRUMENTAL_ASSESSMENT_AND_SCREENING,
    QUESTIONNAIRE_SECTION_ID_VFSS,
    QUESTIONNAIRE_SECTION_ID_FEES,
    QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS,
    QUESTIONNAIRE_SECTION_ID_HRPM,
    QUESTIONNAIRE_SECTION_ID_PEAK_COUGH_FLOW_METER_SPIROMETRY,
    QUESTIONNAIRE_SECTION_ID_NASAL_CANNULA_AIRFLOW_RESPIRATORY_INDUCTANCE_PLETHYSMOGRAPHY,
    QUESTIONNAIRE_SECTION_ID_SEMG,
    QUESTIONNAIRE_SECTION_ID_INDUCED_REFLEXIVE_COUGH_TESTING_PNEUMOTACHOGRAPH,
    QUESTIONNAIRE_SECTION_ID_SCINTOGRAPHY,
    QUESTIONNAIRE_SECTION_ID_ULTRASOUND_ULTRASONOGRAPHY,
    QUESTIONNAIRE_SECTION_ID_CT_320_ROW_AREA_DETECTOR_SCAN,
    QUESTIONNAIRE_SECTION_ID_NEUROIMAGING,
    QUESTIONNAIRE_SECTION_ID_OTHER_SENSOR_BASED_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_OTHER_IMAGING_BASED_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_PROM
} from './questionnaire-sections/constants';

export default [
    {
        question:
            'Is the study performed on human subjects investigating normal or disordered swallowing?​',
        isResponseRequired: true,
        isMultipleResponsesAllowed: false,
        responseOptions: ['Yes', 'No'],
        questionnaireSections: [
            { filter: 0, id: QUESTIONNAIRE_SECTION_ID_PARTICIPANTS },
            { filter: 0, id: QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS }
        ],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        question: 'Did the study investigate a type of swallowing treatment?​​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: false,
                        responseOptions: ['Yes', 'No'],
                        questionnaireSections: [
                            { filter: 0, id: QUESTIONNAIRE_SECTION_ID_TREATMENT }
                        ],
                        questionGroups: []
                    },
                    {
                        question:
                            'Did the study utilize a non-instrumental swallowing assessment or screening tool?​​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: false,
                        responseOptions: ['Yes', 'No'],
                        questionnaireSections: [
                            {
                                filter: 0,
                                id: QUESTIONNAIRE_SECTION_ID_NON_INSTRUMENTAL_ASSESSMENT_AND_SCREENING
                            }
                        ],
                        questionGroups: []
                    },
                    {
                        question: 'Did the study utilize instrumentation?​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: false,
                        responseOptions: ['Yes', 'No'],
                        questionnaireSections: [],
                        questionGroups: [
                            {
                                filter: 0,
                                questions: [
                                    {
                                        question:
                                            'Select the types of instrumentation used in the study:',
                                        isResponseRequired: false,
                                        isMultipleResponsesAllowed: true,
                                        responseOptions: ['VFSS', 'FEES', 'Other (not listed)'],
                                        questionnaireSections: [
                                            {
                                                filter: 0,
                                                id: QUESTIONNAIRE_SECTION_ID_VFSS
                                            },
                                            {
                                                filter: 1,
                                                id: QUESTIONNAIRE_SECTION_ID_FEES
                                            }
                                        ],
                                        questionGroups: [
                                            {
                                                filter: 2,
                                                questions: [
                                                    {
                                                        question:
                                                            'Select the "Other" types of instrumentation used in the study:',
                                                        isResponseRequired: false,
                                                        isMultipleResponsesAllowed: true,
                                                        responseOptions: [
                                                            'Tongue Pressure Tools',
                                                            'High Resolution Pharyngeal Manometry (HRPM)',
                                                            'Peak Cough Flow Meter / Spirometry',
                                                            'Nasal Cannula Airflow / Respiratory Inductance Plethysmography',
                                                            'Surface Electromyography (sEMG)',
                                                            'Induced Reflexive Cough Testing / Pneumotachograph',
                                                            'Scintography',
                                                            'Ultrasound / Ultrasonography',
                                                            'Computed Tomography / 320-Row Area Detector Scan ',
                                                            'Neuroimaging (MRI, fMRI, MEG)',
                                                            'Other Sensor-Based Instrumentation',
                                                            'Other Imaging-Based Instrumentation',
                                                            'Other (not listed)'
                                                        ],
                                                        questionnaireSections: [
                                                            {
                                                                filter: 0,
                                                                id: QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS
                                                            },
                                                            {
                                                                filter: 1,
                                                                id: QUESTIONNAIRE_SECTION_ID_HRPM
                                                            },
                                                            {
                                                                filter: 2,
                                                                id: QUESTIONNAIRE_SECTION_ID_PEAK_COUGH_FLOW_METER_SPIROMETRY
                                                            },
                                                            {
                                                                filter: 3,
                                                                id: QUESTIONNAIRE_SECTION_ID_NASAL_CANNULA_AIRFLOW_RESPIRATORY_INDUCTANCE_PLETHYSMOGRAPHY
                                                            },
                                                            {
                                                                filter: 4,
                                                                id: QUESTIONNAIRE_SECTION_ID_SEMG
                                                            },
                                                            {
                                                                filter: 5,
                                                                id: QUESTIONNAIRE_SECTION_ID_INDUCED_REFLEXIVE_COUGH_TESTING_PNEUMOTACHOGRAPH
                                                            },
                                                            {
                                                                filter: 6,
                                                                id: QUESTIONNAIRE_SECTION_ID_SCINTOGRAPHY
                                                            },
                                                            {
                                                                filter: 7,
                                                                id: QUESTIONNAIRE_SECTION_ID_ULTRASOUND_ULTRASONOGRAPHY
                                                            },
                                                            {
                                                                filter: 8,
                                                                id: QUESTIONNAIRE_SECTION_ID_CT_320_ROW_AREA_DETECTOR_SCAN
                                                            },
                                                            {
                                                                filter: 9,
                                                                id: QUESTIONNAIRE_SECTION_ID_NEUROIMAGING
                                                            },
                                                            {
                                                                filter: 10,
                                                                id: QUESTIONNAIRE_SECTION_ID_OTHER_SENSOR_BASED_INSTRUMENTATION
                                                            },
                                                            {
                                                                filter: 11,
                                                                id: QUESTIONNAIRE_SECTION_ID_OTHER_IMAGING_BASED_INSTRUMENTATION
                                                            },
                                                            {
                                                                filter: 12,
                                                                id: QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION
                                                            }
                                                        ],
                                                        questionGroups: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        question:
                            'Was a patient-reported outcome measure utilized as part of the study?​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: false,
                        responseOptions: ['Yes', 'No'],
                        questionnaireSections: [{ filter: 0, id: QUESTIONNAIRE_SECTION_ID_PROM }],
                        questionGroups: []
                    }
                ]
            }
        ]
    }
];
