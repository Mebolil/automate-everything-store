import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-detail/ServiceHero";
import PainPoints from "@/components/service-detail/PainPoints";
import ROICalculator from "@/components/service-detail/ROICalculator";
import HowItWorksDetail from "@/components/service-detail/HowItWorksDetail";
import SetupPreview from "@/components/service-detail/SetupPreview";
import AdvancedIntegrations from "@/components/service-detail/AdvancedIntegrations";
import FeatureComparison from "@/components/service-detail/FeatureComparison";
import ConsultationUpsell from "@/components/service-detail/ConsultationUpsell";

interface ServiceRow {
  id: string;
  title: string;
  description: string;
  price: number;
  period: string | null;
  type: string;
  hero_subtitle: string | null;
  pain_points: any;
  roi_data: any;
  how_it_works_steps: any;
  setup_description: string | null;
  feature_comparison: any;
  consultation_data: any;
}

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      const { data } = await supabase
        .from("services")
        .select("id, title, description, price, period, type, hero_subtitle, pain_points, roi_data, how_it_works_steps, setup_description, feature_comparison, consultation_data")
        .eq("id", id)
        .eq("active", true)
        .maybeSingle();
      if (!data) {
        navigate("/", { replace: true });
        return;
      }
      setService(data);
      setLoading(false);
    };
    fetch();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!service) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          title={service.title}
          subtitle={service.hero_subtitle || service.description}
          price={service.price}
          period={service.period}
        />
        <PainPoints painPoints={service.pain_points as any} />
        <ROICalculator roiData={service.roi_data as any} price={service.price} />
        <HowItWorksDetail steps={service.how_it_works_steps as any} />
        <FeatureComparison featureComparison={service.feature_comparison as any} />
        <SetupPreview setupDescription={service.setup_description} />
        <AdvancedIntegrations />
        <ConsultationUpsell consultationData={service.consultation_data as any} />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
