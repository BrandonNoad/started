import {
    QUESTIONNAIRE_SECTION_ID_OTHER_IMAGING_BASED_INSTRUMENTATION,
    LABEL_ID_TRANSPARENCY
} from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_OTHER_IMAGING_BASED_INSTRUMENTATION,
    title: 'Other Imaging-Based Instrumentation',
    questionGroups: [
        {
            questions: ['b', 'c', 'd', 'e', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            heading: 'Dye',
            questions: ['p', 'q'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            questions: [
                ...['z', 'aa', 'ab', 'ac'].map((key) => commonInstrumentationQuestions[key]),
                {
                    question: 'If Time-Activity curves were used, were they reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                }
            ]
        }
    ]
};
