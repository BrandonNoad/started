import {
    QUESTIONNAIRE_SECTION_ID_SCINTOGRAPHY,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR
} from '../../constants';
import commonInstrumentationQuestions from '../commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_SCINTOGRAPHY,
    title: 'Scintography',
    questionGroups: [
        {
            questions: ['a', 'c', 'd', 'e', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            questions: ['k', 'l', 'm'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            heading: 'Assessment of Efficiency',
            questions: ['n', 'o'].map((key) => commonInstrumentationQuestions[key])
        },
        {
            questions: [
                ...['r', 's', 't', 'u', 'v', 'w', 'x', 'y'].map(
                    (key) => commonInstrumentationQuestions[key]
                ),
                {
                    question:
                        'Were the following aspects of any stimuli and/or contrast material utilized described (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Dose',
                        'Type',
                        'Brand or manufacturer',
                        'No stimuli and/or contrast material was utilized'
                    ]
                },
                {
                    question: 'Were Regions of Interest (ROIs) localized and identified?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the definitions of ROIs described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        }
                    ]
                },
                {
                    question: 'Were anatomic references/markers used to compare results?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                },
                ...['z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af'].map(
                    (key) => commonInstrumentationQuestions[key]
                )
            ]
        }
    ]
};
