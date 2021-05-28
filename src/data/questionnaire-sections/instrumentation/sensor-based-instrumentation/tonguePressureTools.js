import { QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS,
    title: 'Tongue Pressure Tools',
    questionGroups: [
        {
            // TODO: add N/A to 'g'
            questions: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            questions: ['r', 's', 't', 'u', 'v', 'w'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        }
    ]
};
