import { QUESTIONNAIRE_SECTION_ID_OTHER_SENSOR_BASED_INSTRUMENTATION } from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_OTHER_SENSOR_BASED_INSTRUMENTATION,
    title: 'Other Sensor-Based Instrumentation',
    questionGroups: [
        {
            questions: [
                ...['u', 'd', 'e', 'f', 'p', 'q', 'r', 'g', 'h', 'i', 'j', 'c', 't', 'v', 'w'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
