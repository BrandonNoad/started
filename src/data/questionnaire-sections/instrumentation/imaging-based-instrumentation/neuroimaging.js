import { QUESTIONNAIRE_SECTION_ID_NEUROIMAGING, LABEL_ID_TRANSPARENCY } from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_NEUROIMAGING,
    title: 'Neuroimaging (CT, MRI, fMRI, MEG)',
    questionGroups: [
        {
            questions: [
                commonInstrumentationQuestions.d,
                {
                    question:
                        'Were the following aspects of the scanning protocol described (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Intervals of images in seconds',
                        'Structures measured / Region of Interest',
                        'Scanning parameters',
                        'Tube voltages/current',
                        'Dose absorbed at the skin surface',
                        'Effective dose',
                        'Timing and duration of scanning'
                    ]
                },
                {
                    question: 'Was the use of any contrast media reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question:
                        'Were the following details regarding administration of contrast media described (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Type (e.g., barium, diatrizoate)',
                        'Brand',
                        'Concentration',
                        'Method of administration (e.g., swallowed, injected)',
                        'Dosage timing',
                        'Timing of administration',
                        'No contrast agents were utilized'
                    ]
                },
                ...['ai', 'y'].map((key) => commonInstrumentationQuestions[key]),
                {
                    question: 'Was the following task-specific information reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Type of task(s) performed (e.g., dry swallows, effortful swallows, tongue-to-palate presses, etc.)',
                        'Number of trials',
                        'Rest between trials',
                        'Duration of session',
                        'Number of sessions',
                        'Participant positioning',
                        'Method/accessories to optimize positioning (e.g., wedge, pillow, etc.) or measures (e.g., earplugs)'
                    ]
                },
                ...['e', 'v', 'w', 'j', 's', 't', 'g', 'h', 'i'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
