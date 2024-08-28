// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import './layout.css';

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';

export const metadata = {
    title: 'Home | Irefrans Cosme',
    description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    );
}
