import {
    QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    title: 'Participants',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Which of the following items relevant to the participant characteristics were reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Sex',
                        'Gender',
                        'Age',
                        'Race',
                        'Ethnicity',
                        'Socioeconomic status',
                        'Living status',
                        'Primary language spoken',
                        'N/A'
                    ]
                },
                {
                    question: 'Was there a control group?',
                    labels: [],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question: 'Was the number of participants reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question: 'Were inclusion criteria defined?',
                    labels: [],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question:
                        'Were individuals with a diagnosis of dysphagia recruited into and/or identified in this study?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the criteria for the term dysphagia defined?',
                                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was the method of confirming dysphagia described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Were citations regarding validity of the assessment method provided?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was the reliability of assessment reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was dysphagia severity and duration described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Was baseline diet or method of nutritional intake reported (e.g., IDDSI range including food level and drink level)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        }
                    ]
                },
                {
                    question: 'Were exclusion criteria defined?',
                    labels: [],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question: 'Did the study involve healthy participants?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the criteria for health reported and defined?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'If there were subgroups within the healthy participants, were these described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                }
                            ]
                        }
                    ]
                },
                {
                    question:
                        'Did the study involve individuals with other medical diagnoses besides dysphagia (as opposed to individuals who were considered healthy)?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were any of the following aspects of medical diagnosis reported in the study (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: [
                                        'Details of medical diagnosis',
                                        'Primary medical diagnosis',
                                        'Time since medical diagnosis',
                                        'Stage or severity of disease',
                                        'Criteria for disease characterization',
                                        'Medications taken',
                                        'Other comorbid medical diagnoses'
                                    ]
                                },
                                {
                                    question:
                                        'Was there more than one group of patient participants?',
                                    labels: [],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Were the characteristics distinguishing these groups described?',
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
                }
            ]
        }
    ]
};
