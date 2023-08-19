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
            questions: [
                ...['d', 'e', 'aa', 'ab', 'ac', 'p', 'q', 'g', 'h', 'i', 'j', 'c', 'z'].map(
                    (key) => commonInstrumentationQuestions[key]
                ),
                {
                    question: 'If Time-Activity curves were used, were they reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                }
            ]
        }
    ]
};
