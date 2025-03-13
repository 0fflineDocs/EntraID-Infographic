import React from 'react';
import { motion } from 'framer-motion';

// Define types for our data structure
type Link = {
  title: string;
  url: string;
};

type Category = {
  title: string;
  links: Link[];
};

type CategoryGroup = {
  title: string;
  categories: string[];
};

type CategoryColors = {
  [key: string]: {
    from: string;
    to: string;
  };
};

// Data for categories and links
const categoriesData: Category[] = [
  {
    title: "Fundamentals",
    links: [
      {
        title: "Entra Admin Center",
        url: "https://learn.microsoft.com/en-us/entra/fundamentals/entra-admin-center"
      },
      {
        title: "Authentication & Authorization",
        url: "https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization"
      },
      {
        title: "Security Tokens",
        url: "https://learn.microsoft.com/en-us/entra/identity-platform/security-tokens"
      },
      {
        title: "Microsoft Graph",
        url: "https://learn.microsoft.com/en-us/graph/overview?toc=%2Fentra%2Fidentity-platform%2Ftoc.json&bc=%2Fentra%2Fidentity-platform%2Fbreadcrumb%2Ftoc.json"
      }
    ]
  },
  {
    title: "Architecture",
    links: [
      {
        title: "Security Adoption Framework",
        url: "https://learn.microsoft.com/en-gb/security/adoption/adoption"
      },
      {
        title: "Zero Trust Adoption Framework",
        url: "https://learn.microsoft.com/en-us/security/zero-trust/adopt/zero-trust-adoption-overview"
      },
      {
        title: "Microsoft Cybersecurity Reference Architecture",
        url: "https://learn.microsoft.com/en-gb/security/adoption/mcra"
      },
      {
        title: "Zero Trust Guidance Center",
        url: "https://aka.ms/ZTguide"
      },
      {
        title: "Enterprise Access Model",
        url: "https://learn.microsoft.com/en-us/security/privileged-access-workstations/privileged-access-access-model"
      },
      {
        title: "Conditional Access for Zero Trust",
        url: "https://learn.microsoft.com/en-us/azure/architecture/guide/security/conditional-access-zero-trust"
      }
    ]
  },
  {
    title: "Role-Based Access Control",
    links: [
      {
        title: "RBAC",
        url: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/custom-overview"
      },
      {
        title: "Entra ID Roles",
        url: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#all-roles"
      },
      {
        title: "Principle of least privilege",
        url: "https://learn.microsoft.com/en-us/entra/identity-platform/secure-least-privileged-access"
      },
      {
        title: "Least privileged roles by task",
        url: "https://learn.microsoft.com/en-gb/entra/identity/role-based-access-control/delegate-by-task"
      }
    ]
  },
  {
    title: "Privileged Identity Management",
    links: [
      {
        title: "Deploy PIM",
        url: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-deployment-plan"
      },
      {
        title: "Discovery & Insights",
        url: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-security-wizard"
      },
      {
        title: "PIM for Groups",
        url: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/concept-pim-for-groups"
      },
      {
        title: "Authentication Context (PIM)",
        url: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings#on-activation-require-microsoft-entra-conditional-access-authentication-context"
      },
      {
        title: "Protected Actions",
        url: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/protected-actions-overview"
      }
    ]
  },
  {
    title: "Plan & Deploy",
    links: [
      {
        title: "Entra Identity ID Protection",
        url: "https://learn.microsoft.com/en-us/entra/id-protection/how-to-deploy-identity-protection"
      },
      {
        title: "Plan & Deploy Phishing-Resistant Authentication",
        url: "https://aka.ms/PasswordlessGuide"
      },
      {
        title: "Plan Conditional Access",
        url: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/plan-conditional-access"
      },
      {
        title: "Passkeys",
        url: "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-enable-passkey-fido2"
      }
    ]
  },
  {
    title: "Conditional Access",
    links: [
      {
        title: "Conditional Access",
        url: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/"
      },
      {
        title: "Continuous access evaluation",
        url: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-continuous-access-evaluation"
      },
      {
        title: "Adaptive Session Lifetime",
        url: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-session-lifetime#user-sign-in-frequency"
      },
      {
        title: "Token Protection",
        url: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-token-protection"
      },
      {
        title: "Authentication Strength",
        url: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths"
      },
      {
        title: "Authentication Context",
        url: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-cloud-apps#authentication-context"
      }
    ]
  },
  {
    title: "Emergency Processes",
    links: [
      {
        title: "Manage Emergency Accounts",
        url: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access"
      },
      {
        title: "Monitor Emergency Accounts",
        url: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access#monitor-sign-in-and-audit-logs"
      },
      {
        title: "Incident Response Playbooks",
        url: "https://learn.microsoft.com/en-gb/security/operations/incident-response-playbooks"
      }
    ]
  },
  {
    title: "Security Copilot",
    links: [
      {
        title: "Copilot in Entra",
        url: "https://learn.microsoft.com/en-us/entra/fundamentals/copilot-security-entra"
      },
      {
        title: "Sample Prompts - Microsoft Entra",
        url: "https://github.com/Azure/Security-Copilot/tree/main/Sample%20Prompts/Microsoft%20Entra"
      },
      {
        title: "Promptbook - User Sign In Analysis",
        url: "https://github.com/Azure/Security-Copilot/blob/main/Promptbook%20samples/User%20Sign%20in%20Analysis%20and%20Investigation%20Promptbook.md"
      }
    ]
  },
  {
    title: "Governance",
    links: [
      {
        title: "Access Reviews",
        url: "https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview"
      },
      {
        title: "Entitlement Management",
        url: "https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview"
      },
      {
        title: "Entra ID Governance",
        url: "https://learn.microsoft.com/en-us/entra/id-governance/identity-governance-overview"
      }
    ]
  },
  {
    title: "Learning Material",
    links: [
      {
        title: "Explore Identities in Entra ID",
        url: "https://learn.microsoft.com/en-us/training/modules/explore-identity-azure-active-directory/"
      },
      {
        title: "Secure your identities by using Microsoft Entra ID",
        url: "https://learn.microsoft.com/en-us/training/modules/intro-to-azure-ad/"
      },
      {
        title: "Authentication Capabilities in Entra ID",
        url: "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/"
      },
      {
        title: "Conditional Access & Intune Compliance",
        url: "https://learn.microsoft.com/en-us/training/modules/policy-security-management-using-microsoft-endpoint-manager/"
      },
      {
        title: "Entra Identity Protection",
        url: "https://learn.microsoft.com/en-us/training/modules/manage-azure-active-directory-identity-protection/"
      }
    ]
  },
  {
    title: "Certifications",
    links: [
      {
        title: "SC-300: Microsoft Identity and Access Administrator",
        url: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/?practice-assessment-type=certification"
      },
      {
        title: "SC-300: Learning Path",
        url: "https://learn.microsoft.com/en-us/training/paths/implement-identity-management-solution/"
      },
      {
        title: "SC-100: Microsoft Cybersecurity Architect",
        url: "https://learn.microsoft.com/en-us/credentials/certifications/cybersecurity-architect-expert/"
      },
      {
        title: "SC-100: Learning Path",
        url: "https://learn.microsoft.com/en-us/training/paths/sc-100-design-solutions-best-practices-priorities/"
      }
    ]
  }
];

// Data for categories and links
const categoryColors: CategoryColors = {
  "Fundamentals": {
    from: "#FF7E00", // Entra Orange
    to: "#FF4500"
  },
  "Architecture": {
    from: "#4B0082", // Deep Purple
    to: "#9370DB"
  },
  "Role-Based Access Control": {
    from: "#006400", // Dark Green
    to: "#32CD32"
  },
  "Privileged Identity Management": {
    from: "#8B0000", // Dark Red
    to: "#FF6347"
  },
  "Plan & Deploy": {
    from: "#00008B", // Dark Blue
    to: "#1E90FF"
  },
  "Conditional Access": {
    from: "#2F4F4F", // Dark Slate Gray
    to: "#20B2AA"
  },
  "Emergency Processes": {
    from: "#A52A2A", // Brown
    to: "#CD5C5C"
  },
  "Security Copilot": {
    from: "#191970", // Midnight Blue
    to: "#6495ED"
  },
  "Governance": {
    from: "#4B0082", // Indigo
    to: "#8A2BE2"
  },
  "Learning Material": {
    from: "#006400", // Dark Green
    to: "#32CD32"
  },
  "Certifications": {
    from: "#FF7E00", // Entra Orange
    to: "#FF4500"
  }
};

// Component for individual link items
const CardLink: React.FC<{ title: string; url: string; index: number }> = ({ title, url, index }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 rounded-md hover:bg-gray-800 transition-colors duration-200 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between">
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </motion.a>
  );
};

// Component for category cards
const Card: React.FC<{ category: Category; index: number }> = ({ category, index }) => {
  const colors = categoryColors[category.title] || { from: "#4B0082", to: "#9370DB" };
  
  return (
    <motion.div 
      className="rounded-xl overflow-hidden shadow-lg bg-gray-900 border border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <a
        href={category.links[0]?.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 text-white font-bold text-xl hover:opacity-90 transition-opacity"
        style={{
          background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
        }}
      >
        {category.title}
      </a>
      <div className="p-4 space-y-3">
        {category.links.map((link, idx) => (
          <CardLink key={idx} title={link.title} url={link.url} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

// Group header component - Removed as per requirements

// Main App Component
const EntraIDInfographic: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.header
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Microsoft Entra ID Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive collection of learning material for Microsoft Entra ID
          </p>
        </motion.header>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesData.map((category, categoryIndex) => (
              <Card key={categoryIndex} category={category} index={categoryIndex} />
            ))}
          </div>
        </div>

        <motion.footer
          className="mt-16 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>
            Updated 2025 by 0fflineDocs
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default EntraIDInfographic;// Paste your EntraIDInfographic component code here
