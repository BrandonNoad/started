import {
    QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS,
    title: 'Universally Applicable Questions',
    questionGroups: [
        {
            questions: [
                {
                    question: 'Were the study location(s) and environmental settings described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question: 'Was the data collection protocol(s) described in detail?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were the bolus consistencies described (i.e., rheology, IDDSI level, other validated measure)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question: 'Were bolus volumes described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'Were the number of trials per consistency and volume described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question: 'Was the order of bolus administration described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'Were stimulus brand and manufacturer details reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'Were methods of bolus administration described (e.g., cup sip, spoon-delivered, straw, tube-placed, self- vs clinician administered)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'Were participant instructions described (e.g., cueing)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question: 'Was the positioning of the participant described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                }
                            ]
                        }
                    ]
                },
                {
                    question: 'Were participants blinded to task or treatment condition?',
                    labels: [LABEL_ID_RIGOR, LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question: 'Were raters blinded to participant ID/group assignment?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question: 'Were raters blinded to timepoint/condition?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question:
                        'Were the training and/or credentials of all individuals involved in data collection and/or analysis reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question:
                        'Were the statistical tests/methods used appropriate for the type of data collected (e.g. categorical, ordinal, continuous)?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question: 'Was data completeness and the handling of missing data described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                }
            ]
        }
    ]
};
