import { QUESTIONNAIRE_SECTION_ID_NASAL_CANNULA_AIRFLOW_RESPIRATORY_INDUCTANCE_PLETHYSMOGRAPHY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_NASAL_CANNULA_AIRFLOW_RESPIRATORY_INDUCTANCE_PLETHYSMOGRAPHY,
    title: 'Nasal Cannula Airflow / Respiratory Inductance Plethysmography',
    questionGroups: [
        {
            questions: [
                ...['d', 'e', 'f', 'y', 'u', 'x', 'v', 'w', 's', 't', 'j', 'g', 'h', 'i'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
