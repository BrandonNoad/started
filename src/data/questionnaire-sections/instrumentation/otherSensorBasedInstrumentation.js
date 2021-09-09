import { QUESTIONNAIRE_SECTION_ID_OTHER_SENSOR_BASED_INSTRUMENTATION } from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_OTHER_SENSOR_BASED_INSTRUMENTATION,
    title: 'Other Sensor-Based Instrumentation',
    questionGroups: [
        {
            questions: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            heading: 'Topical Applications',
            questions: ['p', 'q'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            questions: ['r', 't', 'u', 'v', 'w'].map((key) => commonInstrumentationQuestions[key])
        }
    ]
};
