import { QUESTIONNAIRE_SECTION_ID_PEAK_COUGH_FLOW_METER_SPIROMETRY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_PEAK_COUGH_FLOW_METER_SPIROMETRY,
    title: 'Peak Cough Flow Meter / Spirometry',
    questionGroups: [
        {
            questions: [
                ...['u', 'd', 'e', 'f', 'r', 's', 't', 'v', 'w'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
