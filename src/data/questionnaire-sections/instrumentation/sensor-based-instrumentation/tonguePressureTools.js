import { QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_TONGUE_PRESSURE_TOOLS,
    title: 'Tongue Pressure',
    questionGroups: [
        {
            questions: [
                ...['d', 'e', 'f', 'r', 'y', 'u', 'v', 'w', 's', 't', 'j', 'g', 'h', 'i'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
