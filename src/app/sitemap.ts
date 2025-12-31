
import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL || 'https://vj-scans-labs.vercel.app';

    const routes = [
        '',
        '/aboutus',
        '/contact',
        '/our-facility',
        '/ourbranches',
        '/packages',
        '/scans',
        '/specialities',
        // Common Scans
        '/scans/2d-3d-ultrasound',
        '/scans/ctscan',
        '/scans/ecg',
        '/scans/echo',
        '/scans/mammograms',
        '/scans/mriscan',
        '/scans/tmt',
        '/scans/x-ray',
        '/scans/dexa',
        '/scans/laboratory',
        // Specialities
        '/specialities/clinical-genitics-home',
        '/specialities/genetic-counseling',
        '/specialities/male-infertility',
        '/specialities/onco-diagnostics',
        '/specialities/pgt',
        '/specialities/recurrent-pregnancy-loss',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
