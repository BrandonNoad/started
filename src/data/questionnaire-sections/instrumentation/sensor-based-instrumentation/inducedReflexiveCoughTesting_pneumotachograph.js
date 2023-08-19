import {
    QUESTIONNAIRE_SECTION_ID_INDUCED_REFLEXIVE_COUGH_TESTING_PNEUMOTACHOGRAPH,
    LABEL_ID_TRANSPARENCY
} from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_INDUCED_REFLEXIVE_COUGH_TESTING_PNEUMOTACHOGRAPH,
    title: 'Induced Reflexive Cough Testing / Pneumotachograph',
    questionGroups: [
        {
            questions: [
                commonInstrumentationQuestions.u,
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
                        'No cough stimuli were utilized.'
                    ]
                },
                {
                    question: 'Was a procedure for determining reflexive cough threshold utilized?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                ...['d', 'e', 'f', 'r', 's', 't', 'v', 'w', 'x'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
