import TerminalWindow from "@/components/TerminalWindow";
import ContactPanel from "@/components/ContactPanel";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <TerminalWindow title="~/contact">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl text-green mb-4">Get in Touch</h1>
              <p className="text-term-fg text-sm mb-6">
                I'd love to hear from you! Contact me about opportunities or just to say hello.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-term-green p-4 rounded">
                <h2 className="text-lg text-green font-bold mb-4">$ send message</h2>
                <ContactPanel />
              </div>

              <div className="space-y-4">
                <div className="border border-term-cyan p-4 rounded">
                  <h3 className="text-cyan font-bold mb-3">Direct Contact</h3>
                  <div className="space-y-2 text-sm text-term-fg">
                    <p>
                      <span className="text-green">📧 Email:</span><br />
                      <a href={`mailto:${profile.email}`} className="text-cyan hover:text-green">
                        {profile.email}
                      </a>
                    </p>
                    <p>
                      <span className="text-green">📱 Phone:</span><br />
                      <a href={`tel:${profile.phone}`} className="text-cyan hover:text-green">
                        {profile.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border border-term-purple p-4 rounded">
                  <h3 className="text-purple font-bold mb-3">Social Links</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-green">
                        🐙 GitHub
                      </a>
                    </p>
                    <p>
                      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-green">
                        💼 LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
