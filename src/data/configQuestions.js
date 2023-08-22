import React from 'react';
import { Link } from '@chakra-ui/react';

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
    QUESTIONNAIRE_SECTION_ID_ULTRASOUND_ULTRASONOGRAPHY,
    QUESTIONNAIRE_SECTION_ID_NEUROIMAGING,
    QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_PROM
} from './questionnaire-sections/constants';
import { FILTER_TYPE_SOME } from '../util';

export default [
    {
        question:
            'Is the study performed on human subjects investigating normal or disordered swallowing?​',
        isResponseRequired: true,
        isMultipleResponsesAllowed: false,
        responseOptions: ['Yes', 'No'],
        questionnaireSections: [
            { filter: 0, id: QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS },
            { filter: 0, id: QUESTIONNAIRE_SECTION_ID_PARTICIPANTS }
        ],
        questionGroups: [
            {
                filter: 0,
                questions: [
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
                                        responseOptions: [
                                            'Videofluoroscopy (VFSS)',
                                            'Endoscopy (FEES)',
                                            'Other (not listed)'
                                        ],
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
                                                            'Tongue Pressure',
                                                            'High Resolution Pharyngeal Manometry (HRPM)',
                                                            'Peak Cough Flow Meter / Spirometry',
                                                            'Nasal Cannula Airflow / Respiratory Inductance Plethysmography',
                                                            'Surface Electromyography (sEMG)',
                                                            'Cough Reflex Testing',
                                                            'Ultrasound',
                                                            'Neuroimaging (CT, MRI, fMRI, MEG)',
                                                            'Other Instrumentation (not listed)'
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
                                                                id: QUESTIONNAIRE_SECTION_ID_ULTRASOUND_ULTRASONOGRAPHY
                                                            },
                                                            {
                                                                filter: 7,
                                                                id: QUESTIONNAIRE_SECTION_ID_NEUROIMAGING
                                                            },
                                                            {
                                                                filter: 8,
                                                                id: QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION
                                                            }
                                                        ],
                                                        questionGroups: [],
                                                        additionalInformation: [
                                                            {
                                                                filter: {
                                                                    type: FILTER_TYPE_SOME,
                                                                    values: [8]
                                                                },
                                                                value: (
                                                                    <>
                                                                        The framework does not
                                                                        include the type of
                                                                        instrumentation used in the
                                                                        study. If you think it
                                                                        should be added, please
                                                                        email us at{' '}
                                                                        <Link
                                                                            color="secondary.600"
                                                                            href="mailto:frontiersframework@gmail.com"
                                                                            isExternal={true}
                                                                        >
                                                                            frontiersframework@gmail.com
                                                                        </Link>
                                                                        .
                                                                    </>
                                                                )
                                                            }
                                                        ]
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
                            'Was a patient or care-provider reported outcome measure utilized as part of the study?​',
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
