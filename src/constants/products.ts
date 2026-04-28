import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'velocity-carbon-x1',
    name: 'VELOCITY CARBON X1',
    category: 'Serie de Rendimiento',
    price: 285.00,
    oldPrice: 340.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe5VyxOt9SrnQgnYAc_FzdrPpdgIeUW3_67DEPtglCZiMjJ7ir8vkQWBdeBtlELU0jl30-RcvEowKkF8X4lchm1Kcy3Y_3NAszAN4pg2X9fORTIfZQIgkfx7N4L-5C14AxjotHBYueaoqz4Jzk0fnohebbf0ehq265lH-TgU49Q4tWRu7oSMC_xno8LTWx0vTx-mjxTB6wQe5ksEjxIS3p7PqvFMeKKdg9IPIaE0rHuFyq1sPhXYMMXWobFL_wpbwV3rSMX2Xz4eCB',
    description: 'La Velocity Carbon X1 está diseñada para el rendimiento en maratones de élite. Con una placa de carbono de longitud completa y espuma con inyección de nitro ultra receptiva, ofrece el máximo retorno de energía en cada zancada.',
    sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    specs: {
      'PESO': '185g (Talla 9)',
      'OFFSET': '8mm',
      'PLACA': 'Carbono Completo',
      'CORTE': 'Mono-malla'
    },
    isNew: true
  },
  {
    id: 'kinetic-pulse-g3',
    name: 'KINETIC PULSE G3',
    category: 'Running • Serie Pro',
    price: 180.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCaZ78yKgaSvu02ch7UIA6DZdzeeQ1a0obxVwvFAbkIbwSpwY7AaXib2TcrRW6rh03bJ1lp5DAlF6XIOTYZRE-McJ70H39H8v1l09XhmIcrwv8Pj5ZzdAcVgt0OF0_W5xGxR86-BAg8dvH335n_lXf73Ff-K108akrQe-6LOFcphKylUG8aR_gUVlT_zX8MndmVKD6P___IqNXwuFKtIkIj3t0_iEYe9TfqMinBqSfgjjDfw-fmXtsfn1u3s-sPCNqAv2N_LX7spis',
    isHot: true
  },
  {
    id: 'onyx-armor-vest',
    name: 'CHALECO ONYX ARMOR',
    category: 'Entrenamiento • Tech-Wear',
    price: 125.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnQdR0xWJ4CT2yLsmk3aWysUFM4OTcw3xMk6IxVCJ9MR01YY0yj5pQ2IBmpoH8l1ridc7KlpYm6CJD5_2wRCGPa3ksH-Oin1XucenAPzAmIT6C_qvrmV1QE9pSHPK0_48KpVrdKsgROowPnT_LdJOAj-reEO5wENZgxdcKPe7O3HLpE-ary7IBB_VM7aFf2fmA_0hjVfgTEQzt21CX2Z_eO1pUYLXOhxvpjuhbveaHnRI9tcomduzowUNXVmz-62jncv15-QUWPOER'
  },
  {
    id: 'exo-chrono-ultra',
    name: 'EXO-CHRONO ULTRA',
    category: 'Equipo • Biometría',
    price: 450.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARBU3Q08IIHSfAZW1bcUaoRzZSMFkgUeo7OUTqREh1TTQsx56iu4dvm6skisrUtYsAHhpDGDXAV_4dRKj1rPRsOTL_iwyuaoXROv8vs8HGf360TymTQzK_Wvvx9BR_gtaUBTdJduCfbYD0hDQumgAbM2QB0dhg_glR45xPJn8i5xdItSaXkA3Xe2nqmNsDIgmJ_nK_fPnYrOc0JVOj7ItcglJh646GRCSq4Ltnms6BVj6xUe7fBW9RSZyijtjrYtQubidggEh73c6G',
    isSoldOut: true
  },
  {
    id: 'neon-vertex-xl',
    name: 'NEON VERTEX XL',
    category: 'Sprint • Carreras',
    price: 210.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXL9ZzJVHKHENsUFqzhp0_R_5HIefgciMralVpa6jvpMPlFsTkS5B7eUsjqj0Z-dldP1Wyaa7vyob3fWb1sKkAjnVYuBRUsSK0Pt0lmf71LswaVQcqVLunYSIxleOsoeWTiAVPxLTr9zaIxBFzxuFhg9dohhBbjI4FAZInqEwerJ6qjm3-sugsbdDelJLi3ImJObyx_juZ1w2SvufihADNOHlzAeI3Y73A3ezYkGKyQ9GmHEfuVv9ZOhNToeRDyyQJbnzSiw_W850W'
  },
  {
    id: 'aero-blast-z1',
    name: 'AERO-BLAST Z1',
    category: 'Calzado',
    price: 189.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXrJQVkMN1oPnFUe2OHejLF1-Vnx8eAN3B6fENYbqBgHRsGpCs--sTXFXwXZp1Q0_tMv3n7Qnrvjs9GnBGZI-UI4H2EKa7z3ElEXF_nRIbyAkmAu1N1-TPo7t6cuDw8j7ggRvUiNt9xjPt1JtFUZ571DPEbIqYDsFXJ3LEb2iq9htv3JmXTFSeVup_5Ryy26Hh3aw8T868VuRcXRJ0z0aWzU5xPUGdNbYQ1E76ovtuRsYpPBDVbodAwukQQ3rvtcgnfSwhu8gbi2-4',
    isNew: true
  },
  {
    id: 'carbon-tights-v4',
    name: 'MAYAS CARBON V4',
    category: 'Ropa',
    price: 120.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFBQbWRZirHaS8BkM1x0M5RHdRzIVEAROGnVsZazMrtVkFiuugWKP26v0rOqCN3D04uYeiybJRtiyclB9bIdy0fr1wfccYQVoIYGG3hDbTYtEIAZGnKwrHJ94E2zRw3-_XEG06guCyS3t0sPHmY-mgcKJu8EGy-03fUNpsusXSjJmYaRJvMfaQSKrEaL2L-_joqxfoWmw-jKVTUVmDet46ktxt5w3B3XqDnoszL1ZgM-bneKssDdmHx0XlDGWC4iUucj6wAOTwHUGQ'
  },
  {
    id: 'core-pulse-watch',
    name: 'RELOJ CORE-PULSE',
    category: 'Equipo',
    price: 349.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW0oql-x7p7NCgkuIUpmmCQJOTTZ_zGWteoKnrnNszLArS9qybY6U2NTwXfCMb62EZA3UPAl6ugKG0P7f3T0XpdhrvtP5CfxvO1eO9KyqocbYvCyYmgEPlwEpGfORkMEFCOk-tyAhgCPZ9Wt1bY___TGHeUykWWVB1_Wc339LkXGu8Jxzk-iCXRft7nNajOXR5L22-GYcvBIOGe6RUX4xejBk_ksPbykVoUA3sQEWpGaEt_S_PxGzmt3vweZmPQ_hNuTJjlsh5OLdc',
    isHot: true
  },
  {
    id: 'velocity-g2',
    name: 'VELOCITY G2',
    category: 'Calzado',
    price: 155.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAgBQYEXwrNJQVhKH0NY2rdAuWyaMao9NJ6tsOc6gMHe1U0Lr1HZ3NR0nLtDo9A18g1E-6yxZfmDkxhvG1-qh4KTxocMHSoCsbb-R8CD4pG3IgC0gX0dEXG-3T3abXOaTpAFGJC4ImO4P7mfHqEtaBXA-BPWcfne5cM2os9QebheevalFb9JjxcMyBSRIdW76qRoKaPgkWyDJ2P92QP_pIZSogH3rbyQIjHcpz-uBhov1yQhTBt4ZwwJIATEUz_eciZ3n0xhM0B3gA'
  },
  {
    id: 'pro-grip-handles',
    name: 'AGARRES PRO-GRIP',
    category: 'Accesorios',
    price: 45.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB24DUbCRTUG4n1_lDJ_wQkIpE8HvZaiVSRVdvJLdjsCn8DScIyrybfs23fGlHHeGavrbg8dMSV1OCmXS31yWYaY1uskegFPgl7_WS7mh3_KpSVM5nn9JZY384CiCvz-zONjcLnppXh_3CJQUSqpGX_G46HyECm9ZZ35F6Z_IyxPGSLLeYEtNZ2aAznckoR5hFSHV1mIz5bNQ4s48op4A_LI6jWF88tw7KkBQiXILS5IVVg_PO_LX6nNTVjQ7Ye6gU9UkoJSyyuHUC8'
  },
  {
    id: 'apex-pro-leggings',
    name: 'LEGGINGS APEX PRO',
    category: 'Compresión • Serie Pro',
    price: 120.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI2EEfDNDV9hXB1hOAaA-BxYk5T7mNinLrjFVQExaT1Stb7iv8KV2vcbLM8WzqnCvzZRw8g3iMKUHQ6iAyPffNkIrNYwutz-3HvQ5uzHsUs7MXD4_qp6OTf1HvvvnlHKDJjDIjFLR8yBHB_YRLbPwtTAW0gKjL8gpn-pHVuIrJy-rF3RrSR811Q7aUxgwd9OTWnAZoYbpQ9yTGDf365M7V320S_E9c9fXxBCDk-su9NYQPDiclbs6alDBw5kCr8olEFvAfwpg6wfeE',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Leggings de alto rendimiento diseñados para el máximo soporte muscular y movilidad.'
  },
  {
    id: 'hyper-lume-sports-bra',
    name: 'TOP DEPORTIVO HYPER-LUME',
    category: 'Ropa Deportiva Élite',
    price: 85.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARY3Wt7VACDF1x6T0oJgdqShJ7lAkXKXp7ru64cK8NShd4Ejc2XPsTp1plg7jWYdcmC82Ih4SFRAOUZTGCNRRmFPmGk03Kel_2eGKwizMm4951S9dBCV18sNQj2HwKaOMndPm8vv42sAJFhpEy-MixVpnrkQ1Xnp_nXUOFwS0hTl6vDPo24X5kKO_b--DZ5ZjGGD03Hvl0PwTW9gjwNNONRHuFn6J9kEgmf0-tsT4lZJ37aMjdTLY1vU2gs6W7_yzoffrdKjS_eXcT',
    sizes: ['S', 'M', 'L'],
    description: 'Top deportivo transpirable de alto impacto con acentos en verde neón para visibilidad y estilo.'
  },
  {
    id: 'apex-vest-pro',
    name: 'CHALECO APEX PRO',
    category: 'Serie de Rendimiento',
    price: 84.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBebck6WD3CeHel2ccXSRxURtZyhJilzXCv0lgiKJWXvoeRRO0XdMQ5ktie2Xow_K8NqSI97lT5zrWxWbgpuKJ1ZDix6gmc_fmCakJygC6fV4eqedCM67yA1lQ7U-UfDZsB6-q6i9ZscIgb0vjIPOd0Jcm2zEuV7dlkgY9qexWjj3KHHqIjL-nKlcgXTbInUsJ0s0Dxchs7hgQQVlQFWiPAqNTmzkfzC-2_ed6klCxGc9uHbLhMG5KcVFmTAmQBsw_92uezEWoACkJ9',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Chaleco de compresión negro carbón para condiciones de entrenamiento de élite.'
  },
  {
    id: 'neon-speedrunner',
    name: 'NEON SPEEDRUNNER',
    category: 'Calzado • Carreras',
    price: 160.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_fAvOmrCNsl5QMtj4yq3yEdKl5d9Dl-kw_NPm6Dvv9n4V8ALqMWXhKR0Ch6eE48bUi4HwXohqMQTx7XCfUmsJXMCFN63HCzgtiGaudxsSEbpVO4Yf1hdO6P9s7dvUiXHJcQJLuQ_VJiNZmn4KU9QHM2I8pGorGuXdtRwLE9ZgSucuHEB0gNA6tnPv_8bMkyvaCelsXGsHhClK1M_GtHIVNwUS08-xQZ0bEgcHyVWQKScLhdrcW3YEPPNtuoMgJDIzkzru42q5U53M',
    sizes: ['8', '9', '10', '11', '12'],
    description: 'Zapatilla de carreras ultra ligera diseñada para velocidades de vértigo.'
  }
];
