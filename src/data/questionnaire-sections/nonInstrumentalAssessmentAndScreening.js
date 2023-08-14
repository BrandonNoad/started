import {
    QUESTIONNAIRE_SECTION_ID_NON_INSTRUMENTAL_ASSESSMENT_AND_SCREENING,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_NON_INSTRUMENTAL_ASSESSMENT_AND_SCREENING,
    title: 'Screening and Clinical / Non-Instrumental Assessments of Swallowing',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was the non-instrumental swallowing assessment or screening tool validated?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Was the validation study referenced in the text?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        },
                        {
                            filter: 1,
                            questions: [
                                {
                                    question: 'Was inter-rater reliability reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the method for determining inter-rater reliability reported?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question: 'Was intra-rater reliability reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the method for determining intra-rater reliability reported?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question: 'Were discrepancy resolution processes described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'Was the assessment or screening tool designed to detect a binary outcome (e.g., presence/absence of a diagnosis, pass/fail test)?',
                                    labels: [],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Was sensitivity/specificity data reported?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No', 'N/A']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question: 'Were all outcomes of the tool listed and described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Was the scale, metric, or criteria for each outcome described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Were outcomes validated with instrumentation?',
                                    labels: [LABEL_ID_RIGOR],
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
