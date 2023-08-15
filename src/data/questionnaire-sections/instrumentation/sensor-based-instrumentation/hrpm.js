import { QUESTIONNAIRE_SECTION_ID_HRPM, LABEL_ID_TRANSPARENCY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_HRPM,
    title: 'High Resolution Pharyngeal Manometry (HRPM)',
    questionGroups: [
        {
            questions: ['b', 'c', 'd', 'e', 'f'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            heading: 'Topical Applications',
            questions: ['p', 'q'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            questions: [
                ...['r', 's', 't', 'u'].map((key) => commonInstrumentationQuestions[key]),
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
        },
        {
            questions: [
                {
                    question: 'Was HRPM used to assess swallowing?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: ['g', 'h', 'i', 'j', 'v', 'w'].map(
                                (key) => commonInstrumentationQuestions[key]
                            )
                        }
                    ]
                }
            ]
        }
    ]
};
