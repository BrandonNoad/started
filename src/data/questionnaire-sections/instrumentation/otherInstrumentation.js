import { QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION } from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION,
    title: 'Other Instrumental Assessments of Swallowing',
    questionGroups: [
        {
            questions: [
                ...['d', 'e', 'f', 'g', 'h', 'i', 'j'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
