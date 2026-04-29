# Design Brief: Mari's Professional Portfolio

## 1. Feature Summary
A high-end, single-page landing page for Mariane, a professional private nanny. The page serves as a digital CV and portfolio, blending her extensive 20-year career with her personal experience as a mother and her Montessori-led philosophy.

## 2. Primary User Action
**"Get in Touch"** — A primary CTA leading to an email/contact form, positioned in the hero and at the footer.

## 3. Design Direction
- **Color Strategy**: **Committed**. Using warm terracotta and cashmere tones to create an intimate, "sunlit nursery" atmosphere.
- **Theme Scene**: "A high-net-worth parent browsing for childcare late at night in a quiet, well-lit study; looking for a feeling of absolute safety and competence."
- **Anchor References**: 
    - *Stripe* (for the rhythmic, trustworthy layout/typography).
    - *Kinfolk* (for the serene, editorial imagery and generous whitespace).
    - *Aera* (for the sophisticated, "luxury-domestic" feel).

## 4. Scope
- **Fidelity**: Production-ready.
- **Breadth**: Single long-form landing page.
- **Interactivity**: Shipped-quality (smooth scrolls, entrance animations, interactive pricing calculation/RUT explanation).
- **Time Intent**: Polish until it ships.

## 5. Layout Strategy
- **Hero**: Atmospheric image + "The Gold Standard of Nurturing Care" headline.
- **The Journey (Timeline)**: A vertical, unhurried timeline of her career (Brazil -> Iceland -> Sweden).
- **The "Mother's Note"**: A full-width, "Committed" color section with elegant Baskervville italic quotes about her own daughter and empathy.
- **The Methodology**: A grid or list of "Specializations" (Newborns, Twins, Montessori).
- **Pricing & RUT**: A clean, technical-looking table with a subtle toggle/calculator for RUT deductions to demystify the cost.
- **The Commitment**: Final "Service Agreement" section to reinforce professionalism.

## 6. Key States
- **Default**: The primary experience.
- **Loading**: A gentle fade-in of the hero text.
- **Hover**: Subtle lifts on "Specialization" cards; elegant color shifts on the CTA.
- **Responsive**: Mobile-first priority (parents often browse on phones between tasks).

## 7. Interaction Model
- **Narrative Scroll**: Content reveals as the user scrolls, creating a rhythmic "storytelling" experience.
- **Transparent Pricing**: An interactive breakdown of the 190 SEK vs 175 SEK rates.

## 8. Content Requirements
- **Copy**: Directly sourced and refined from `CONTENT.md`.
- **Imagery**: 
    - Hero: `photo-1590490360182-c33d57733427` (Serene, soft-lit interior).
    - Motherhood: `photo-1559339352-11d035aa65de` (Warm, intimate child care).
    - Nature: `photo-1543332164-6e82f355bab1` (Swedish nature/outdoor vibe).

## 9. Recommended References
- `spatial-design.md` (for the rhythmic sectioning).
- `motion-design.md` (for the `ease-out-expo` reveals).
- `ux-writing.md` (to ensure the "warm professional" voice is consistent).

## 10. Open Questions
- Should the "Contact" be a simple mailto link or a small contact form component? (Defaulting to mailto for initial version to reduce friction).
