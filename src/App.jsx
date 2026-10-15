import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { StatsStrip } from './components/StatsStrip.jsx';
import { OpportunityDiscovery } from './components/OpportunityDiscovery.jsx';
import { ResumeUploadSection } from './components/ResumeUploadSection.jsx';
import { ForCollegesSection } from './components/ForCollegesSection.jsx';
import { ForEmployersSection } from './components/ForEmployersSection.jsx';
import { AppInterfaceLook } from './components/AppInterfaceLook.jsx';
import { DownloadAppSection } from './components/DownloadAppSection.jsx';
import { Footer } from './components/Footer.jsx';
import { ActionModal } from './components/ActionModal.jsx';

export default function App() {
  const [modal, setModal] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');

  const goTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (type, title = '') => {
    setSelectedItem(title);
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
    setSelectedItem('');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0080FF] selection:text-white flex flex-col">
      <Navbar
        onSignIn={() => openModal('sign_in')}
        onSignUp={() => openModal('sign_up')}
        onNavigate={goTo}
      />

      <main className="flex-1">
        <Hero
          onSelectOption={(role) => {
            if (role === 'college') openModal('college_waitlist');
            else if (role === 'hiring') openModal('hiring_waitlist');
            else goTo('opportunity');
          }}
          onExploreJobs={() => goTo('opportunity')}
        />

        <StatsStrip />

        <OpportunityDiscovery
          onExplore={() => goTo('app-interface')}
          onApplyItem={(title) => openModal('job_waitlist', title)}
        />

        <ResumeUploadSection
          onSuccess={(fileName) => openModal('job_waitlist', `Uploaded Resume: ${fileName}`)}
        />

        <ForCollegesSection
          onListCollege={() => openModal('list_college')}
        />

        <ForEmployersSection
          onPostJob={() => openModal('post_job')}
        />

        <AppInterfaceLook />

        <DownloadAppSection
          onContactSupport={() => openModal('contact_support')}
          onScheduleCall={() => openModal('schedule_call')}
        />
      </main>

      <Footer
        onExploreColleges={() => goTo('colleges')}
        onFindOpportunities={() => goTo('opportunity')}
        onListCollege={() => openModal('list_college')}
        onPostJob={() => openModal('post_job')}
        onNavigate={goTo}
      />

      <ActionModal
        type={modal}
        onClose={closeModal}
        initialItemTitle={selectedItem}
      />
    </div>
  );
}
