export const faqs: faq[] = [
  {
    question: 'How does your service help me manage multiple API keys?',
    answer:
      'Our platform provides a centralized dashboard where you can securely store, organize, and access all your API keys from different services in one place, eliminating the hassle of tracking them individually.',
  },
  {
    question: 'Is my API key data encrypted and secure?',
    answer:
      'Yes, all API keys are encrypted both at rest and in transit using industry-standard encryption protocols, ensuring your sensitive information is always protected.',
  },
  {
    question: 'Can I easily share API keys with my team?',
    answer:
      'Absolutely! You can securely share access to specific API keys with team members without exposing the actual keys, streamlining collaboration while maintaining security.',
  },
  {
    question: 'What happens if I lose an API key?',
    answer:
      'With our service, you can quickly retrieve your stored API keys at any time, so you never have to worry about losing access or spending time searching for them.',
  },
  {
    question:
      'Does your service help prevent unauthorized access to my API keys?',
    answer:
      'Yes, we offer role-based access controls and detailed audit logs, so you can monitor who accesses your keys and ensure only authorized users have permission.',
  },
  {
    question:
      'How do I integrate your key management service with my existing workflow?',
    answer:
      'Our platform offers easy integration options, including API access and plugins, allowing you to seamlessly incorporate secure key management into your current development process.',
  },
  {
    question: 'Can I track usage and get alerts for my API keys?',
    answer:
      'Yes, you can monitor API key usage and set up customizable alerts for suspicious activity or when keys are nearing expiration, helping you stay proactive about security.',
  },
];

interface faq {
  question: string;
  answer: string;
}
