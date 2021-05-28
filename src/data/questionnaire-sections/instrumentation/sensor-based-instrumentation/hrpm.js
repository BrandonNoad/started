import { QUESTIONNAIRE_SECTION_ID_HRPM, LABEL_ID_TRANSPARENCY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_HRPM,
    title: 'High Resolution Pharyngeal Manometry (HRPM)',
    questionGroups: [
        {
            questions: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            heading: 'Dye',
            questions: ['p', 'q'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            questions: [
                ...['r', 's', 't', 'u', 'v', 'w'].map((key) => commonInstrumentationQuestions[key]),
                {
                    question:
                        'Was a method for confirming and fixing catheter positioning reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question:
                        'Were procedures for acclimatizing participants to the presence of the catheter reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                commonInstrumentationQuestions.y
            ]
        }
    ]
};
