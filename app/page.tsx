import { Button, Text, Title } from '@mantine/core';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <header>
                <div className="container mx-auto pt-5 pb-5 flex justify-between items-center">
                    <Title order={3}>Irefrans Cosme</Title>
                </div>
            </header>
            <main className="relative isolate">
                <div className="container mx-auto min-h-screen p-24">
                    <div className="flex flex-col gap-2 z-10">
                        <article>
                            <Title order={1}>{"Let's Connect"}</Title>
                            <Text size="lg" className="w-1/2">
                                Nice to meet you; {"I'm"} Irefrans Cosme,
                                developing websites and web applications for
                                people in business and in needs of digital
                                tools.
                            </Text>
                        </article>
                        <div className="flex gap-1">
                            <Button>Explore</Button>
                            <Button color="dark">Github</Button>
                        </div>
                    </div>
                </div>
                <Image
                    src="/assets/hand.jpg"
                    alt="src"
                    sizes="100vw"
                    objectFit="cover"
                    fill
                    className="absolute inset-full -z-10 top-0"
                />
            </main>
        </>
    );
}
