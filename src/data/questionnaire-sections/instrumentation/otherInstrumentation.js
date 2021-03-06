import { QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION } from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_OTHER_INSTRUMENTATION,
    title: 'Other Instrumentation',
    questionGroups: [
        {
            // TODO: Add N/As
            questions: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        }
    ]
};
