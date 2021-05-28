import { QUESTIONNAIRE_SECTION_ID_PEAK_COUGH_FLOW_METER_SPIROMETRY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_PEAK_COUGH_FLOW_METER_SPIROMETRY,
    title: 'Peak Cough Flow Meter / Spirometry',
    questionGroups: [
        {
            // TODO: add N/A to 'h'
            questions: ['b', 'c', 'd', 'e', 'f'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            questions: ['r', 's', 't', 'u', 'v', 'w'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        }
    ]
};
