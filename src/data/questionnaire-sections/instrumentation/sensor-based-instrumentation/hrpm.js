import { QUESTIONNAIRE_SECTION_ID_HRPM, LABEL_ID_TRANSPARENCY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_HRPM,
    title: 'High Resolution Pharyngeal Manometry (HRPM)',
    questionGroups: [
        {
            questions: [
                ...['d', 'e', 'f', 'p', 'q', 'r', 'ag', 'ah'].map(
                    (key) => commonInstrumentationQuestions[key]
                ),
                ...['y', 'u', 'v', 'w', 's', 't', 'j', 'g', 'h', 'i'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
