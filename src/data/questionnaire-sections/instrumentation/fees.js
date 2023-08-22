import { QUESTIONNAIRE_SECTION_ID_FEES, LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_FEES,
    title: 'Flexible Endoscopic Evaluation of Swallowing (FEES)',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Were the details of the equipment reported including scope model and recording system?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                ...['e', 'f'].map((key) => commonInstrumentationQuestions[key]),
                {
                    question: 'Was dye used in the study?',
                    labels: [],
                    responseOptions: ['Yes', 'No', 'N/A'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was coloring method for bolus trials described for reproducible preparation (i.e., color type, brand, mixture method, amount, etc.)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                }
                            ]
                        }
                    ]
                },
                ...['p', 'q', 'c', 'g', 'h', 'i', 'j'].map(
                    (key) => commonInstrumentationQuestions[key]
                ),
                {
                    question: 'Were secretions scored in the study?',
                    labels: [],
                    responseOptions: ['Yes', 'No', 'N/A'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Was a validated secretion scale used?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No', 'N/A'],
                                    questionGroups: [
                                        {
                                            filter: 1,
                                            questions: [
                                                {
                                                    question:
                                                        'Was application of non-validated secretion scale described in reproducible manner?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No', 'N/A']
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
                    question: 'Was the protocol for describing anatomical abnormalities reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question:
                        'Was safety of swallowing (i.e. penetration-aspiration) evaluated in the study?',
                    labels: [],
                    responseOptions: ['Yes', 'No', 'N/A'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was a validated penetration-aspiration scale used for FEES?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'If a non-validated scale was utilized, were procedures described for reproducibility?',
                                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'Was application of the safety rating scale described in a reproducible manner (i.e., bolus level, swallow level, worst verse mean, etc.)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'Was timing of safety impairment (i.e., before, during or after the swallow) acknowledged?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                }
                            ]
                        }
                    ]
                },
                {
                    question: 'Was efficiency (i.e. residue) evaluated in the study?',
                    labels: [],
                    responseOptions: ['Yes', 'No', 'N/A'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Was a validated residue scale used for FEES?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'If a non-validated scale was utilized, were procedures described for reproducibility?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                },
                                {
                                    question:
                                        'Was application of residue rating scale described in a reproducible manner (i.e., bolus level, swallow level, region, etc.)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
