import {
    QUESTIONNAIRE_SECTION_ID_CT_320_ROW_AREA_DETECTOR_SCAN,
    LABEL_ID_TRANSPARENCY
} from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_CT_320_ROW_AREA_DETECTOR_SCAN,
    title: 'Computed Tomography / 320-Row Area Detector Scan',
    questionGroups: [
        {
            questions: ['c', 'd', 'e', 'g', 'h', 'i'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            questions: [
                {
                    question:
                        'Were the following aspects of the scanning protocol described (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Intervals of images in seconds',
                        'Structures measured',
                        'Scanning parameters',
                        'Tube voltages/current',
                        'Scanning range',
                        'Dose absorbed at the skin surface',
                        'Effective dose, dosimeter and location',
                        'Moment when the scan started',
                        'Duration of the scanning'
                    ]
                }
            ]
        }
    ]
};
