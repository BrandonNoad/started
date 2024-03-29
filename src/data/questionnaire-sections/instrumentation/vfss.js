import { QUESTIONNAIRE_SECTION_ID_VFSS, LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_VFSS,
    title: 'Videofluoroscopic Swallow Study (VFSS)',
    questionGroups: [
        {
            questions: [
                ...['a'].map((key) => commonInstrumentationQuestions[key]),
                {
                    question:
                        'Were the details of the equipment reported including model and recording system?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question:
                        'Were details regarding recording settings reported (specifically signal acquisition rate/frame rate)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                ...['e', 'f', 'k', 'm', 'c', 'g', 'h', 'i', 'j'].map(
                    (key) => commonInstrumentationQuestions[key]
                ),
                {
                    question: 'Was a validated penetration-aspiration scale used for VFSS?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question:
                        'If a non-validated scale was utilized, were procedures described for reproducibility?',
                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question:
                        'Was application of the safety rating scale described in a reproducible manner (i.e., bolus level, swallow level, worst versus mean/median, etc.)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question: 'Was the frequency of safety impairment during VFSS acknowledged?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question:
                        'Was timing of safety impairment (i.e., before, during or after the swallow) acknowledged?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                {
                    question: 'Was a validated residue scale used for VFSS?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No', 'N/A']
                },
                ...['n', 'o'].map((key) => commonInstrumentationQuestions[key])
            ]
        }
    ]
};
