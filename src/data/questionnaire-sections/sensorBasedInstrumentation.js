import {
    QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION,
    title: 'Other Sensor-Based Instrumentation',
    questionGroups: [
        {
            questions: [
                {
                    question: 'Select the types of sensor-based instrumentation used in the study:',
                    labels: [],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Tongue pressure tools',
                        'High resolution pharyngeal manometry',
                        'Peak cough flow meter/spirometry',
                        'Respiratory inductive plethysmography',
                        'Surface electromyography',
                        'Induced reflexive cough testing/pneumotachograph',
                        'Other (not listed)'
                    ],
                    questionGroups: [
                        {
                            filter: 1,
                            // heading: 'High Resolution Pharyngeal Manometry',
                            questions: [
                                {
                                    question:
                                        'Were the following aspects of lubrication described (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: [
                                        'Type (e.g., water-based, petroleum-based, etc.)',
                                        'Brand or manufacturer',
                                        'Concentration',
                                        'Quantity',
                                        'Application process',
                                        'No lubrication or nasal decongestant were utilized'
                                    ]
                                },
                                {
                                    question:
                                        'Were the following aspects of topical anesthetic described (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: [
                                        'Type (e.g., water-based, petroleum-based, etc.)',
                                        'Brand or manufacturer',
                                        'Concentration',
                                        'Quantity',
                                        'Application process',
                                        'No topical anesthetic was utilized'
                                    ]
                                },
                                {
                                    question:
                                        'Were the following aspects of measurement report (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: ['Signal frequencies', 'Sampling rate']
                                },
                                {
                                    question:
                                        'Was a method for confirming and fixing catheter positioning reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Were procedures for acclimatizing participants to the presence of the catheter reported?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Was the presence or absence of any adverse events reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        },
                        {
                            filter: 3,
                            // heading: 'Respiratory Inductive Plethysmography',
                            questions: [
                                {
                                    question:
                                        'Were the following aspects of measurement report (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: ['Signal frequencies', 'Sampling rate']
                                }
                            ]
                        },
                        {
                            filter: 4,
                            // heading: 'Surface Electromyography',
                            questions: [
                                {
                                    question:
                                        'Were the following aspects of measurement report (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: ['Signal frequencies', 'Sampling rate']
                                }
                            ]
                        },
                        {
                            filter: 5,
                            // heading: 'Induced Reflexive Cough Testing / Pneumotachograph',
                            questions: [
                                {
                                    question:
                                        'Were the following aspects of cough stimuli described (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: [
                                        'Type (e.g., citric acid, capsaicin, etc.)',
                                        'Concentration',
                                        'Quantity per dosage',
                                        'Dosage duration',
                                        'Timing of dosage administrations within inspiratory/expiratory cycle',
                                        'No cough stimuli were utilized'
                                    ]
                                },
                                {
                                    question:
                                        'Was a procedure for determining reflexive cough threshold utilized?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
