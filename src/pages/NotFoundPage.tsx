import { Link } from 'react-router-dom';
import { Seo } from '../components/layout/Seo';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="flex min-h-[60vh] items-center py-20">
        <Container className="text-center">
          <p className="text-stat text-primary">404</p>
          <h1 className="mt-4 text-h1 text-text-primary">Page not found</h1>
          <p className="mt-4 text-body-lg text-text-secondary">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <div className="mt-8">
            <Button href="/">Back to home</Button>
          </div>
          <p className="mt-6">
            <Link to="/help" className="text-primary link-underline">
              Visit help centre
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
