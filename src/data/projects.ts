const sq = (id: string, _file: string, _width = 1500) => `/images/projects/${id}.webp`;

export interface Project {
  slug: string;
  title: string;
  cover: string;
  videoId: string;
  poster: string;
  eyebrow?: string;
  synopsis?: string;
  website?: string;
  support?: string;
  supportLinks?: Array<{ text: string; href: string }>;
  awards?: string;
  laurels?: string[];
  gallery?: string[];
  hideDetails?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'directingreel',
    title: 'Directing Reel',
    cover: '/images/portfolio/directing-reel.webp',
    videoId: '1188315857',
    poster: '/images/posters/directing-reel.jpg',
    hideDetails: true,
  },
  {
    slug: 'insidethesewalls',
    title: 'Inside These Walls',
    cover: '/images/portfolio/inside-these-walls.webp',
    videoId: '1165853049',
    poster: '/images/posters/inside-these-walls.jpg',
    eyebrow: 'AFI DWW+ Short Film',
    synopsis: 'An incarcerated father reunites with his wife and daughter for twenty-four hours and attempts to navigate an uncertain future.',
    website: 'https://www.inside-these-walls.com/',
    support: 'Pandora Short Film Grant recipient, and supported by the American Film Institute’s Directing Workshop for Women+ Fellowship',
    supportLinks: [
      { text: 'Pandora Short Film Grant', href: 'https://pandora.org/' },
      { text: 'Directing Workshop for Women+ Fellowship', href: 'https://conservatory.afi.com/dww-about/' },
    ],
    gallery: [
      sq('c3eb916c-0f91-446c-92c5-4289df36fc15', 'ITW_D1_0148+copy.jpg'),
      sq('7256caa7-8d44-4f4f-90a1-958f3640962d', 'ITW_D1_0112+copy.jpg'),
      sq('161d075a-674d-4902-bc10-f00e2f3e7d76', 'ITW_D1_0061+copy.jpg'),
      sq('d847ebe5-5d03-4491-9386-feeb66e90b5d', 'ITW_D1_0063+copy.jpg'),
      sq('6235fd4e-a546-47a9-9bee-30c3b2b29133', 'ITW_D1_0059+copy.jpg'),
      sq('b8bfff1a-c8ed-4077-a0b7-5adf49845029', 'ITW_D1_0030.jpg'),
      sq('dcc2141c-76e9-4f6a-810b-57e6ed3cea00', 'ITW_D1_0005+copy.jpg'),
      sq('d72a8d7f-3c5e-4230-9c3e-7dacaae50e8f', 'ITW_D1_0173+1+copy.jpg'),
      sq('6ecd7e05-e19e-4730-a3b0-a9972b48d0e0', 'ITW_D1_0130+copy.jpg'),
      sq('8472204f-9472-44bb-987b-5b6a2810655f', 'ITW_D1_0149+copy.jpg'),
      sq('edcd0db8-18f8-4498-ad3f-27a001455572', 'ITW_D4_0353+copy.jpg'),
      sq('333e0b41-beff-445e-8b43-5937454782c9', 'ITW_D4_0380+copy.jpg'),
      sq('6a3ff788-a298-46f8-9afa-8485575db8f5', 'ITW_D1_0186+1+copy.jpg'),
      sq('0596804f-028f-4d13-8055-94fa7374de2b', 'ITW_D5_0441.jpg'),
    ],
  },
  {
    slug: 'buscandoalma',
    title: 'Buscando Alma',
    cover: '/images/portfolio/two-funerals.webp',
    videoId: '944987479',
    poster: '/images/posters/buscando-alma.jpg',
    eyebrow: '2025 Oscar®-Qualified Short Film',
    synopsis: 'A Honduran immigrant is given the chance to meet her mother after nearly two decades of separation.',
    website: 'https://buscandoalma.com/',
    awards: 'Oscar®-Qualifying Best Drama Short (Out on Film - Atlanta’s LGBTQ Film Festival), Special Jury Award (Santa Fe International Film Festival), Audience Choice Winner (San Diego International Film Festival), Excellence in Performance (SAG-AFTRA Foundation Short Film Showcase), Best Pride Short (deadCenter Film Festival), Lavender Award (Sedona International Film Festival), Best Short Film, Best Performances (Coconut Grove Film Festival), Founder’s Award (McMinnville Short Film Festival), Best Short Film (Way Out West Film Fest)',
    laurels: [
      sq('cfb00d3f-1f3f-4a12-8f21-31d933e80211', 'LALIFF+2025+Official+Selection.jpg', 500),
      sq('91cbfd81-24c5-4e13-a48e-6840b2cd1408', 'OFFICIALSELECTION-WayOUTWestFilmFest-2025.png', 500),
      sq('9cf70d5b-d054-463c-9039-2f29110f78b4', 'Screenshot+2024-10-27+at+5.11.53+PM.png', 500),
      sq('2463201a-89fc-4ed9-9227-b991d41eb58e', 'OOF2024_AwardLaurels_DramaShort_Black.png', 500),
      sq('d9ad9ed7-2080-45d8-9b7c-8351ecb51dcd', 'EIFF_2025_Official_Selection_CMYK_Black.jpg', 500),
      sq('f86317da-952c-42aa-a48c-ac6f73756ec2', 'LAVENDER+AWARD.png', 500),
      sq('35ec4781-b26a-4119-8bc8-a071a15657b8', 'Untitled+design+%2832%29.png', 500),
      sq('cf9ed072-af50-4cc2-92ae-03bcfdc3445b', 'OFFICIALSELECTION-EvolutionMallorcaInternationalFilmFestival-2025.png', 500),
      sq('2e0aac75-b7b1-426d-9564-424cf799b176', 'BF-Festival-laurel-selection.jpg', 500),
      sq('f773c43b-d624-4102-9c8f-af785033997b', 'OFFICIAL+SELECTION+%28BLACK%29.png', 500),
      sq('5bb26c13-bfa1-4554-a970-cc3750cb2a2f', 'Screenshot+2024-10-27+at+5.04.03+PM.png', 500),
      sq('bcacf5bc-b8c0-4eac-add9-bd86cc2d18ae', 'Laurels_2025_Official-Selection.jpg', 500),
      sq('f20a0d5b-7589-4023-9630-0d6cccb80db9', '2025_Iris+Prize+Laurel_Official+Selection_Black.png', 500),
      sq('38724360-24a0-4e71-a08b-236f12a64032', 'OFFICIAL+SELECTION+-+41st+Boston+Film+Festival+-+2025.png', 500),
      sq('2e5bfeb3-ccf3-45d7-b3db-71abe9baba22', 'FEST25_Laurel_Official_Selection_Black.png', 500),
      sq('5b84be59-469a-4511-b519-70ec10484159', 'Excellence+in+Performance+-+SAG-AFTRA+Foundation+Short+Film+Showcase-black-hires.png', 500),
      sq('debcd881-6d25-4f99-8a59-f32a3fb0b57b', 'AFF25_Laurel_Official_Selection-print.png', 500),
      sq('7e20e399-8122-4e0d-ad0d-d6c68f9ccbc1', 'AWARD+WINNER+-+McMinnville+Short+Film+Festival+-+2025+%281%29.png', 500),
      sq('e197bb8a-9cb8-48a6-9366-f3ed8ebd5a88', '2025_Catalina_Official_Selection_Laurel_Black.png', 500),
      sq('57ead46c-e765-47aa-8ef1-934cbf9d2254', 'Coconut+Grove+Laurel.png', 500),
    ],
    gallery: [
      sq('202df6e0-2070-446e-bed9-5703d23e61fd', 'BuscandoAlma_BTS_31.jpg'),
      sq('7c36102e-83c5-4542-a316-9d496b4df60e', 'BuscandoAlma_BTS_2.jpg'),
      sq('adcc252a-b326-459f-b43e-b22e55e9d461', 'BuscandoAlma_BTS_24.jpg'),
      sq('3834f27d-17f1-4af0-8e89-231df61499ed', 'BuscandoAlma_BTS_25.jpg'),
      sq('464ef534-79f3-40bc-89b8-a96a9cd95103', 'BuscandoAlma_231112_095306_DSC09422_grd_1.jpg'),
      sq('d648bca5-0291-427d-8ee9-89f58bd2dff1', 'BuscandoAlma_BTS_4.jpg'),
      sq('e1c09900-2d80-4bbf-88df-723429b05069', 'BuscandoAlma_BTS_7.jpg'),
      sq('b1c1e55c-57bc-4892-a8b9-d41e60a31095', 'BuscandoAlma_BTS_16.jpg'),
      sq('0c562452-18ed-4892-9c15-fe028a0f0998', 'BuscandoAlma_BTS_10.jpg'),
      sq('40e5c143-4ff4-4c6d-8b6f-44dffe41e163', 'BuscandoAlma_BTS_9.jpg'),
      sq('1771604964982-PAU2NKV39W7CKLXUYFDS', 'BuscandoAlma_BTS_35.jpg'),
      sq('8e79884d-28ac-4bd3-a035-4bdec6c73e32', 'BuscandoAlma_BTS_36.jpg'),
      sq('0cfc0faa-78da-4e10-8af3-d821e0eb0322', 'gettyimages-2222377680-2048x2048+2.jpg'),
      sq('0148e2d7-0139-43da-870c-f259cba84941', 'New+Project+%281%29.jpg'),
      sq('1771605042263-A0X0UGNZU871GCERDMP1', '2024_Q4_BuscandoAlma_FYC_241120_140146_DSC04596_grd_1_full.jpg'),
      sq('64cfbf96-a14e-46da-b580-319085431000', 'New+Project.jpg'),
      sq('f681753e-5530-4f71-a016-512f70c0d5e1', '2024_q4_buscandoalma_outonfilm_241006_173149_dsc03954_grd_1_full.jpg'),
      sq('a2ed83a8-80ba-4c68-b7c7-8abb178f8a15', '54544603514_c3a5ac0873_o.jpg'),
    ],
  },
  {
    slug: 'two-funerals-and-a-freezer-short-film',
    title: 'Two Funerals and a Freezer',
    cover: '/images/portfolio/buscando-alma.webp',
    videoId: '954591932',
    poster: '/images/posters/two-funerals.jpg',
    eyebrow: '2023 - Dark Comedy Short Film',
    synopsis: 'Estranged twins Isaac and Maggie embark on an impromptu road-trip that challenges their relationship',
    laurels: [
      sq('e82f69fa-9b51-4dc9-9a1e-fbe4a09fdcbb', '2023.png', 500),
      sq('d8c660b8-7ec8-4dd7-8b1c-feb55492f32e', '2023+%281%29.png', 500),
      sq('5dc807eb-3038-4edf-9338-7471d845589b', '2023+%282%29.png', 500),
      sq('a89316b9-ec89-4d88-97e4-7a07477e6b82', 'Untitled+design+%2832%29.png', 500),
    ],
    gallery: [
      sq('1b8a1fdd-16f9-4d05-ad98-acf388896ffb', 'IMG_4040.JPG'),
      sq('0fac9403-1514-4144-968c-d1d7fbe0ded8', 'New+Project+%2811%29.jpg'),
      sq('a31179c8-5625-465d-a1d6-f4a96a164d28', 'New+Project+%281%29.jpg'),
      sq('3a326995-6bf4-439d-a07d-22868b42f6e7', 'New+Project+%284%29.jpg'),
      sq('5e77802a-c908-444f-b654-6134497ec099', 'New+Project.jpg'),
      sq('d4b11ac1-c571-46fc-aaa1-9298ed72f029', 'IMG_0229.JPG'),
      sq('ba7e6c23-6353-495d-a7bf-e66c893c4438', 'IMG_3994.jpeg'),
      sq('3a3d7aff-2c1a-4341-b49f-cd10c1345332', 'IMG_0226.jpg'),
      sq('d8640ad0-4c58-4a42-8d9f-3ea0877ca466', 'New+Project+%282%29.jpg'),
      sq('9061e814-98d4-4801-a08b-0591c377d7e5', 'New+Project+%286%29.jpg'),
      sq('6491ef46-1d3b-402c-a824-a4d37340cebb', 'New+Project+%287%29.jpg'),
      sq('95f36332-726f-4ce0-8a96-61fb65516b16', 'New+Project+%289%29.jpg'),
      sq('1e55ee95-f45f-468e-8140-c0b0cf263bea', 'New+Project+%283%29.jpg'),
      sq('bff1c15d-c199-422c-b419-6b441b65c33a', 'IMG_4037.JPG'),
      sq('466fb7c9-7709-497d-80a1-de6efcd1299a', 'New+Project+%2810%29.jpg'),
      sq('f24c7388-92cd-49df-aeb1-5ca645a19ef9', 'New+Project+%285%29.jpg'),
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
