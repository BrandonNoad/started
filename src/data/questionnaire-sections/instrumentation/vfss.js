import { QUESTIONNAIRE_SECTION_ID_VFSS, LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from '../constants';
import commonInstrumentationQuestions from './commonInstrumentationQuestions';

export default {
    id: QUESTIONNAIRE_SECTION_ID_VFSS,
    title: 'Videofluoroscopic Swallow Study (VFSS)',
    questionGroups: [
        {
            questions: ['a', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].map(
                (key) => commonInstrumentationQuestions[key]
            )
        },
        {
            questions: [
                commonInstrumentationQuestions.k,
                {
                    question:
                        'Were details regarding recording settings reported (specifically signal acquisition rate/frame rate)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                commonInstrumentationQuestions.l,
                {
                    question:
                        'Were standard definitions used (i.e. well-defined measures/parameters)?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                },
                commonInstrumentationQuestions.m
            ]
        },
        {
            heading: 'Assessment of Safety',
            questions: [
                {
                    question: 'Was a validated penetration-aspiration scale used for VFSS?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question:
                        'If a non-validated scale was utilized, were procedures described for reproducibility?',
                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question:
                        'Was application of the safety rating scale described in a reproducible manner (i.e., bolus level, swallow level, worst versus mean/median, etc.)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question: 'Was the frequency of safety impairment during VFSS acknowledged?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question:
                        'Was timing of safety impairment (i.e., before, during or after the swallow) acknowledged?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                }
            ]
        },
        {
            heading: 'Assessment of Efficiency',
            questions: [
                {
                    question: 'Was a validated residue scale used for VFSS?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                },
                ...['n', 'o'].map((key) => commonInstrumentationQuestions[key])
            ]
        }
    ]
};
