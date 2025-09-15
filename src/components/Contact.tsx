import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, this would send to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-6">
            <Mail className="h-4 w-4 text-indigo-400" />
            <span className="text-sm text-indigo-400">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">Let's <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Connect</span></h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together on your next data science project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-indigo-500/20 rounded-xl">
                  <Mail className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="mb-1 text-white">Email</h3>
                  <p className="text-sm text-slate-300">rbukhari241@gmail.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <Phone className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="mb-1 text-white">Phone</h3>
                  <p className="text-sm text-slate-300">+92 3332403231</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <MapPin className="h-6 w-6 text-orange-400 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="mb-1 text-white">Location</h3>
                  <p className="text-sm text-slate-300">Karachi, Pakistan</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="pt-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <h3 className="mb-4 text-white">Let's Connect</h3>
              <p className="text-sm text-slate-300 mb-4">
                Whether you have a project in mind, want to discuss data science trends, 
                or explore collaboration opportunities, I'd love to hear from you.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                  Available for consulting projects
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  Open to speaking engagements
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  Interested in research collaborations
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project or inquiry..."
                      rows={6}
                      className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}