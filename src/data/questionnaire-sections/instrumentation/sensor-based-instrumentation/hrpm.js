import { QUESTIONNAIRE_SECTION_ID_HRPM, LABEL_ID_TRANSPARENCY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_HRPM,
    title: 'High Resolution Pharyngeal Manometry (HRPM)',
    questionGroups: [
        {
            questions: [
                ...['d', 'e', 'f', 'p', 'q', 'r'].map((key) => commonInstrumentationQuestions[key]),
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
                ...['y', 'u', 'v', 'w', 's', 't', 'g', 'h', 'i', 'j'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
