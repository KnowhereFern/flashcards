window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA["ai103"] = {
  "exam": {
    "code": "AI-103",
    "title": "Developing AI Apps and Agents on Azure",
    "subtitle": "Microsoft Azure AI · 182 verified community questions (ExamCademy guest harvest)"
  },
  "contexts": [],
  "questions": [
    {
      "n": 1,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent. The agent accepts user-uploaded screenshots and relies on a multimodal chat model. Some of the screenshots contain potentially malicious embedded text. You need to prevent a prompt injection attack and ensure that third-party content is treated as lower trust. How should you configure Prompt Shields for document attacks?\n\nPrompt shields action: Disable the shield. / Set action to block. / Set action to annotate.\n\nAdditional mitigation: Enable Spotlighting. / Create a custom blocklist. / Use optical character recognition (OCR) to extract the text from the images first.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Prompt shields action:</b> Set action to block.<br><b>Additional mitigation:</b> Enable Spotlighting.",
      "exp": "Prompt Shields for document attacks inspects content that originates outside the user's direct input, such as text embedded in an uploaded image or document, for indirect (cross-prompt) injection attempts. Setting the shield's action to Block causes the service to block the request when it detects embedded instructions that attempt to hijack the model, which is what stops the prompt injection attack. Spotlighting is the complementary Prompt Shields capability that marks ingested third-party content, such as text extracted from a screenshot, as distinct from and lower-trust than the user's and system's own instructions, so the model does not treat embedded text as an authoritative command, which directly satisfies the requirement to treat third-party content as lower trust. A custom blocklist only matches known bad strings, and running OCR first does not itself establish provenance or trust separation.\n\n**Learn more:** [Prompt Shields in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields) · [Introducing Spotlighting in Azure AI Foundry: Detect and Block Cross Prompt Injection Attacks](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/better-detecting-cross-prompt-injection-attacks-introducing-spotlighting-in-azur/4458404)"
    },
    {
      "n": 2,
      "domain": "",
      "ctx": -1,
      "q": "You need to recommend a plan for creating a customer support agent using the Microsoft Foundry Agent Service. The agent must meet these requirements:  \n  \n- Retain user preferences across multiple conversations.  \n- Let users provide contextual grounding by uploading documents directly during a chat.  \n  \nWhich Foundry capability should you recommend for each requirement?\n\nTo retain user preferences across conversations, use: Agent memory that uses persistent storage / Conversation history / Orchestration-managed session context\n\nTo enable users to provide contextual grounding during chats, use the: Azure AI Search tool / Code interpreter tool / File search tool",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>To retain user preferences across conversations, use:</b> Agent memory that uses persistent storage<br><b>To enable users to provide contextual grounding during chats, use the:</b> File search tool",
      "exp": "Agent memory that uses persistent storage keeps curated, long-lived information such as user preferences outside of any single conversation thread, so it can be recalled in later sessions and satisfies the requirement to retain preferences across conversations; plain conversation history and orchestration-managed session context are scoped to the current thread or session and do not persist afterward. The File search tool lets users attach documents directly during a chat and grounds responses in that uploaded content on the fly, whereas the Azure AI Search tool queries a pre-built, pre-indexed search index rather than files uploaded in the moment, and the code interpreter tool executes code rather than performing document retrieval.\n\n**Learn more:** [Memory in Microsoft Foundry Agent Service (preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory) · [Create and use memory in Foundry Agent Service (preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/memory-usage)"
    },
    {
      "n": 3,
      "domain": "",
      "ctx": -1,
      "q": "You have an application named App1 that uses Azure Speech in Foundry Tools to transcribe live calls.  \n  \nTranscript segments frequently contain both English and Spanish. App1 sends each segment to Azure Translator in Foundry Tools for translation into another language, but mixed-language segments sometimes produce incomplete or incorrect translations.  \n  \nYou need to reduce translation errors, ensuring that the entire transcript is translated successfully.  \n  \nWhat should you do before sending the segments to Translator?",
      "choices": {
        "A": "Use document translation to translate the entire transcript as a single document.",
        "B": "Split the mixed-language segments into single-language segments and translate each segment separately.",
        "C": "Enable automatic language detection for the translation request.",
        "D": "Specify English as the source language in the translation request for all the segments."
      },
      "answer": "B",
      "exp": "Azure Translator performs best when a request's source content is a single language, because language identification and translation both operate on the assumption of one dominant source language per request; a segment that mixes English and Spanish causes the service to mis-detect or mis-translate the portion in the non-dominant language. Splitting each mixed-language transcript segment into single-language sub-segments before translating each one separately ensures every portion is translated correctly and the entire transcript is translated successfully. Treating the whole transcript as one document does not resolve mixed-language content within a single passage, enabling automatic language detection still only selects one source language per request, and forcing English as the source language for every segment would mistranslate the Spanish portions.\n\n**Learn more:** [What is Azure Translator?](https://learn.microsoft.com/en-us/azure/ai-services/translator/translator-overview)"
    },
    {
      "n": 4,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project named Project1 that contains an agent, and the agent uses an OpenAPI 3.0 specification to call an external weather service.  \n  \nThe weather service requires a key that must be passed in an HTTP header, and the key value is stored as a connection in Project1.  \n  \nYou need to ensure that the key value from the connection is automatically included whenever the OpenAPI tool is invoked.  \n  \nWhat should you configure in the OpenAPI specification?",
      "choices": {
        "A": "a header parameter defined for each operation",
        "B": "an Azure Key Vault connection",
        "C": "an API key security scheme",
        "D": "a Bearer token security scheme"
      },
      "answer": "C",
      "exp": "When an OpenAPI 3.0 specification declares a securitySchemes entry of type apiKey (a key passed in a header, query, or cookie), the Foundry OpenAPI tool binds that scheme to the connection associated with the tool and automatically injects the connection's stored key value into every matching request, without the caller supplying it manually. Defining a plain per-operation header parameter would require the value to be supplied at invocation time rather than sourced automatically from the connection, an Azure Key Vault connection is not how the OpenAPI tool authenticates outbound calls, and a Bearer token security scheme is intended for OAuth/JWT bearer tokens rather than a static API key header.\n\n**Learn more:** [Connect OpenAPI tools to Microsoft Foundry agents](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/openapi)"
    },
    {
      "n": 5,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent. You use a GitHub Actions workflow for CI/CD. You need to configure the workflow to automatically evaluate the agent whenever a pull request (PR) is created, and to prevent branches from merging if the evaluation results do not meet the defined thresholds.\n\nAuthentication method: A personal access token (PAT) / A user-assigned managed identity / An Azure Login action that uses OpenID Connect (OIDC)\n\nIf the evaluation results are NOT met, configure the workflow to: Lock the target branch / Send an alert / Fail",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Authentication method:</b> An Azure Login action that uses OpenID Connect (OIDC)<br><b>If the evaluation results are NOT met, configure the workflow to:</b> Fail",
      "exp": "GitHub Actions workflows should authenticate to Azure using the Azure Login action configured for OpenID Connect (OIDC) federated credentials, which lets the workflow obtain a short-lived Microsoft Entra ID token without storing a personal access token or a managed-identity secret in the repository. This is the recommended secretless authentication pattern for GitHub-hosted runners that need to call Azure resources such as a Foundry project. To gate a pull request on the evaluation outcome, the workflow step that runs the evaluation must be configured to fail (return a non-zero exit code) when the results do not meet the defined thresholds; when the repository's branch protection rules require that check to pass, a failing step blocks the PR from merging. Sending an alert or locking the target branch does not tie the PR status check to the evaluation result, so neither action prevents the merge.\n\n**Learn more:** [How to run an evaluation in GitHub Action - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/evaluation-github-action) · [Set up CI/CD for hosted agents with the Azure Developer CLI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/set-up-ci-cd-cli)"
    },
    {
      "n": 6,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project named Project1 that contains the following:  \n  \n- An OpenAPI tool that calls an external API  \n- A project connection named Connection1 that stores the API key for the external API  \n  \nWhen an agent calls the OpenAPI tool, the API returns a 401 Unauthorized error, and traces show that the API key header is not being sent.  \n  \nYou need to ensure that the OpenAPI tool automatically includes the API key from Connection1 on every request.  \n  \nWhat should you do?",
      "choices": {
        "A": "Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller.",
        "B": "Add the API key header manually to the OpenAPI specification.",
        "C": "Configure the tool to use the default connection of Project1.",
        "D": "Connect the tool to Connection1."
      },
      "answer": "D",
      "exp": "The Foundry OpenAPI tool only injects a stored credential into its outbound calls when the tool is explicitly bound to the connection holding that credential; if the tool is not connected to Connection1, there is no credential for the platform to attach, which is why the API key header is missing and the call returns a 401. Connecting the tool to Connection1 causes the platform to automatically attach the connection's stored API key to every request the tool makes. Identity passthrough would forward the caller's Microsoft Entra token rather than the stored API key, manually hardcoding the header in the specification defeats the purpose of storing the secret in a connection, and relying on Project1's default connection does not guarantee that default is Connection1.\n\n**Learn more:** [Connect OpenAPI tools to Microsoft Foundry agents](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/openapi)"
    },
    {
      "n": 7,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent, and the agent uses Azure Speech in Foundry Tools.  \n  \nYou fine-tune a baseline speech-to-text model for the en-US locale and publish it.  \n  \nWhen the agent calls the Speech to text REST API, it returns an error indicating that the project ID is invalid.  \n  \nYou need to set the project property to the correct value.  \n  \nWhat should you set the project property to?",
      "choices": {
        "A": "the project URL",
        "B": "the custom speech project ID",
        "C": "the project ID",
        "D": "the custom speech endpoint URL"
      },
      "answer": "B",
      "exp": "When you call the Speech to text REST API for custom speech, you set the project property to the ID of your custom speech project — the GUID that appears in the fine-tuning URL in the Microsoft Foundry portal (for example, 00001111-aaaa-2222-bbbb-3333cccc4444). Microsoft's documentation explicitly warns that this custom speech project ID is NOT the same as the Microsoft Foundry project ID, so supplying the generic \"project ID\" (the Foundry project ID) is what produces the \"project ID is invalid\" error described, and you must use the custom speech project ID instead. The project URL and the custom speech endpoint URL are self/reference links returned in API responses rather than the value you assign to the project property, so neither the project URL nor the endpoint URL is correct.\n\n**Learn more:** [Get the project ID for the REST API](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-custom-speech-create-project)"
    },
    {
      "n": 8,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing a customer support agent that is grounded in internal documentation.  \n  \nFollowing a recent update, users report the following issues:  \n  \n- Some answers are not supported by the retrieved documents.  \n- A small number of responses are flagged for policy violations.  \n  \nYou need to evaluate each issue. Which observability signal should you use for each one? An observability signal can be used once, more than once, or not at all.\n\nItems:\n- Groundedness evaluation metrics\n- Latency breakdown traces\n- Risk and safety metrics\n- Token usage analytics",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Unsupported responses:</b> Groundedness evaluation metrics<br><b>Policy violations:</b> Risk and safety metrics",
      "exp": "Groundedness evaluation measures whether a generated response is actually supported by the content retrieved from the grounding documents, so it is the correct signal for catching answers that are not backed by retrieved documents. Risk and safety metrics assess generated content for policy-violating material such as harmful, unsafe, or non-compliant output, so they are the correct signal for responses flagged for policy violations. Latency breakdown traces and token usage analytics measure performance and cost, not answer quality or safety, so they do not address either issue.\n\n**Learn more:** [Built-in Evaluators Reference - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators) · [Risk and Safety Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators)"
    },
    {
      "n": 9,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing a workflow for a customer support triage process. The workflow includes an Ask a question node that stores the user's response in a local variable named Var01. You need to build the following Power Fx expressions:  \n  \n- An if/else condition expression that confirms Var01 holds a value.  \n- A Send message expression that returns the stored user response converted to uppercase.  \n  \nHow should you configure these expressions?\n\nIf/else condition expression: IsBlank(Local.Var01) / IsEmpty(Local.Var01) / Not(IsBlank(Local.Var01))\n\nSend message expression: {Local.Var01} / {Upper(Local.Var01)} / {Upper(Var01)}",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>If/else condition expression:</b> Not(IsBlank(Local.Var01))<br><b>Send message expression:</b> {Upper(Local.Var01)}",
      "exp": "In Power Fx, IsBlank() tests whether a value is empty; wrapping it in Not() - Not(IsBlank(Local.Var01)) - evaluates to true only when the local variable actually holds a value, which is the correct if/else guard for confirming that Var01 contains a value. IsEmpty() is a table-oriented function and is not the correct blank-check for a scalar variable. To reference a workflow's local variable inside a Power Fx expression you must use the Local. scope prefix, so the Send message expression that returns the response in uppercase is {Upper(Local.Var01)}; Upper(Var01) omits the required scope prefix and does not resolve to the stored variable.\n\n**Learn more:** [Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)"
    },
    {
      "n": 10,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project with a customer support agent built using the Foundry Agent Service. The agent uploads user-provided screenshots to Azure Storage via a ticketing tool and receives back a blob URL for further reasoning.  \n  \nYou need to apply image moderation during agent runs so that harmful content is never returned, with Azure AI Content Safety accessing the images through the blob URL. The solution must follow the principle of least privilege.  \n  \nWhat should you configure for Content Safety?\n\nGuardrails: Select Tool call and set Action to Block. / Select User input and Output and set Action to Annotate. / Select User input and Tool response and set Action to Annotate. / Select User input, Output, Tool response, and Tool call and set Action to Block.\n\nStorage access: Storage account access keys / A user-assigned identity that is assigned the Storage Queue Data Contributor role / A system-assigned managed identity that is assigned the Storage Blob Data Reader role / A system-assigned managed identity that is assigned the Storage Blob Data Contributor role",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Guardrails:</b> Select User input, Output, Tool response, and Tool call and set Action to Block.<br><b>Storage access:</b> A system-assigned managed identity that is assigned the Storage Blob Data Contributor role",
      "exp": "Foundry Agent Service guardrails support four intervention points - user input, tool call, tool response, and output - and for agents (as opposed to models) the only available response action is Annotate and block; a plain Annotate-only action is not offered for agents, so any control meant to prevent harmful content from being returned must use Block. Because the screenshot's blob URL is produced by the ticketing tool and only becomes available to the agent as content returned by that tool, the guardrail must cover the tool response - along with user input, tool call, and output - so image content is screened wherever it can enter or leave the run, with Block enforcing that flagged harmful content is stopped rather than merely logged. For storage access, Azure AI Content Safety's documented requirement is that its resource identity hold the Storage Blob Data Contributor (or Owner) role to read a blob via a blobUrl; Storage Blob Data Reader is not a supported role for this scenario. The least-privileged working configuration is therefore a system-assigned managed identity granted Storage Blob Data Contributor, which avoids both storage account keys and an unrelated user-assigned queue role.\n\n**Learn more:** [Quickstart: Analyze image content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image) · [Guardrails and controls overview in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview)"
    },
    {
      "n": 11,
      "domain": "",
      "ctx": -1,
      "q": "You are building a speech processing solution in Microsoft Foundry for a customer support platform.  \n  \nThe platform will transcribe live phone calls so that supervisors at your company can view the call transcripts and detect issues while calls are still in progress. The call audio arrives as a continuous stream from the telephony system.  \n  \nYou need the call transcripts to appear within only a few seconds of the audio stream.  \n  \nWhat should you do?",
      "choices": {
        "A": "Use text to speech by using a custom neural voice.",
        "B": "Use speech translation to generate the transcripts into multiple languages.",
        "C": "Run a batch transcription job on recorded audio files.",
        "D": "Use real-time speech to text to process streaming audio input."
      },
      "answer": "D",
      "exp": "Real-time speech to text processes a continuous audio stream and returns partial and final transcription results within seconds, which is required for supervisors to view transcripts while calls are still in progress. Batch transcription is designed for asynchronous processing of already-recorded audio files and has much higher latency, making it unsuitable for live monitoring. Text to speech with a custom neural voice generates audio from text rather than transcribing it, and speech translation converts transcribed speech into another language rather than providing the low-latency transcription itself.\n\n**Learn more:** [What is real-time speech to text?](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text)"
    },
    {
      "n": 12,
      "domain": "",
      "ctx": -1,
      "q": "You have a Python application named App1 that integrates with a Microsoft Foundry project named Project1. You need App1 to meet the following requirements:  \n  \n- Authenticate by using a Microsoft Entra managed identity.  \n- Send prompts to a deployed model using the Azure OpenAI Responses API.  \n  \nHow should you complete the Python code?\n\n AzureKeyCredential / ClientSecretCredential / DefaultAzureCredential\n\n compact / create / retrieve",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> DefaultAzureCredential<br><b></b> create",
      "exp": "A managed identity is consumed in the Azure SDK through azure.identity.DefaultAzureCredential, which automatically discovers and uses the assigned managed identity (or other available credential sources) without requiring a stored key or client secret - unlike AzureKeyCredential (API-key auth) or ClientSecretCredential (requires a stored application secret). Once an AIProjectClient exposes an OpenAI-compatible client through get_openai_client(), sending a new prompt through the Responses API is done by calling responses.create(model=..., input=...); create() issues a new model response, while retrieve() only fetches an existing response and compact() is unrelated to submitting a prompt.\n\n**Learn more:** [Use the Azure OpenAI Responses API](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/responses) · [Quickstart: Build agents using the Responses API](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/responses-api)"
    },
    {
      "n": 13,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent, and the agent has a Model Context Protocol (MCP) tool that queries a knowledge base stored in Azure AI Search.  \n  \nSome agent runs return answers straight from the base model without invoking the knowledge base, so those responses lack grounded citations.  \n  \nYou are given the following code snippet, which runs the agent:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783676238651-7e94yywb.png)  \n  \nYou need to add the correct `tool_choice` parameter to the code so that the agent is deterministically forced to invoke the MCP tool on every run.  \n  \nWhat should you add?",
      "choices": {
        "A": "tool_choice={“required”}",
        "B": "tool_choice={“auto”}",
        "C": "tool_choice={“type”:“knowledge_base”}",
        "D": "tool_choice ={“type”:“mcp”}"
      },
      "answer": "D",
      "exp": "The Azure AI Agents SDK's tool_choice parameter accepts either a mode string (auto, required, none) or a named tool choice object that pins the run to one specific tool by its type — for example a value equivalent to {\"type\": \"mcp\"} — which forces the agent to invoke that particular tool rather than whichever tool the model happens to pick. Setting tool_choice to \"required\" only guarantees that some tool is called; if the agent had more than one tool available it would not guarantee the MCP tool specifically is the one invoked. Because the goal is to deterministically force invocation of the MCP tool specifically (not merely any tool), the typed/named tool_choice value targeting the mcp tool type is required.\n\n**Learn more:** [azure.ai.agents.models.AgentsNamedToolChoice class](https://learn.microsoft.com/en-us/python/api/azure-ai-agents/azure.ai.agents.models.agentsnamedtoolchoice) · [Tool best practices for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice)"
    },
    {
      "n": 14,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project.  \n  \nYou are planning a customer support solution built around an agent. The solution must:  \n  \n- Provide accurate, context-aware responses grounded in internal product documentation stored in Azure AI Search.  \n- Require deep, multi-step reasoning across long contexts.  \n- Generate detailed natural language responses.  \n  \nWhich type of model should you use to power the agent?",
      "choices": {
        "A": "a multimodal model",
        "B": "a small language model (SLM)",
        "C": "a key phrase extraction model",
        "D": "a large language model (LLM)"
      },
      "answer": "D",
      "exp": "Large language models are built for deep, multi-step reasoning over long context windows and for producing detailed, fluent natural-language output, which is exactly what grounded, retrieval-based customer-support reasoning requires. Small language models trade reasoning depth and context-window size for lower cost and latency, a multimodal model adds image/audio handling that is not called for here, and a key-phrase extraction model performs narrow text extraction rather than open-ended generation and reasoning."
    },
    {
      "n": 15,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent.  \n  \nThe agent ingests scanned PDF vendor invoices that contain tables and embedded QR codes. The agent must preserve the PDF layout in the extracted output so that downstream processing can reference sections and tables.  \n  \nYou plan to call Azure Content Understanding in Foundry Tools.  \n  \nYou need to extract the content and layout elements and detect the QR codes, without requiring a language model deployment.  \n  \nWhich built-in analyzer should you use?",
      "choices": {
        "A": "prebuilt-documentFieldSchema",
        "B": "prebuilt-read",
        "C": "prebuilt-documentSearch",
        "D": "prebuilt-layout"
      },
      "answer": "D",
      "exp": "The prebuilt-layout analyzer extracts content and layout elements — words, paragraphs, tables, and section structure — while preserving document layout, and it also detects and decodes barcodes, including QR codes, as part of its output; it runs as a layout/OCR-based analyzer and does not require deploying a language model. prebuilt-read performs OCR text extraction only, without table or layout structure, and prebuilt-documentFieldSchema and prebuilt-documentSearch are not the layout-and-barcode extraction analyzer.\n\n**Learn more:** [Azure Content Understanding in Foundry Tools - analyzer reference](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference) · [Document layout analysis - Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout?view=doc-intel-4.0.0)"
    },
    {
      "n": 16,
      "domain": "",
      "ctx": -1,
      "q": "You are deploying a support agent that lets users upload photos.  \n  \nYou need to automatically classify the uploaded images for harmful content. The solution must block content according to severity levels.  \n  \nWhat should you do?",
      "choices": {
        "A": "Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools.",
        "B": "Enable prompt shields.",
        "C": "Use blocklists.",
        "D": "Implement image moderation."
      },
      "answer": "D",
      "exp": "Azure AI Content Safety's image moderation capability analyzes images and returns, for each harm category (such as violence, sexual content, self-harm, and hate), a severity level (0-Safe, 2-Low, 4-Medium, 6-High). An application can configure allowed/prohibited severity thresholds per category so the service returns an accept/reject decision, letting harmful uploads be blocked automatically based on severity. Running OCR keyword scanning only detects text embedded in an image and misses purely visual harm; prompt shields defend against prompt-injection attacks rather than classifying image content; and blocklists match specific known terms rather than assessing visual harm severity.\n\n**Learn more:** [Quickstart: Analyze image content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image) · [Harm categories in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories)"
    },
    {
      "n": 17,
      "domain": "",
      "ctx": -1,
      "q": "Solution: You increase the value of the `max_tokens` parameter.  \n  \nDoes this solution meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "The reported failure is that required regulatory clauses are already present in the retrieved content but are being left out of the generated summary — a content-selection/faithfulness problem, not an output-length limitation. Raising max_tokens only increases the ceiling on how many tokens the model is allowed to generate; it does not instruct or force the model to include the specific clauses it is currently choosing to omit, so it does not reliably fix the omission and does not meet the goal of improving completeness."
    },
    {
      "n": 18,
      "domain": "",
      "ctx": -1,
      "q": "Solution: You add a reflection pass that regenerates the response if the required clauses are missing.  \n  \nDoes this solution meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "A",
      "exp": "Adding a reflection pass directly closes the loop between detection and correction: the pipeline checks the generated summary for the required regulatory clauses and, if any are missing, triggers regeneration before the response is returned. Because this pattern explicitly re-attempts generation until the missing content is included, it directly addresses the reported completeness failure and meets the goal.\n\n**Learn more:** [Agent Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators)"
    },
    {
      "n": 19,
      "domain": "",
      "ctx": -1,
      "q": "Solution: You increase the value of the `temperature` parameter.  \n  \nDoes this solution meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "The temperature parameter controls the randomness of token sampling; it has no mechanism for ensuring that specific required clauses from the retrieved content are selected and included in the output. Raising temperature makes outputs less predictable and, if anything, increases the risk of omitting or altering required content rather than guaranteeing its inclusion, so it does not meet the goal of improving completeness."
    },
    {
      "n": 20,
      "domain": "",
      "ctx": -1,
      "q": "Solution: You run an evaluation flow that scores responses for completeness and blocks any response that falls below a defined threshold.  \n  \nDoes this solution meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "An evaluation flow that scores completeness and blocks low-scoring responses is a quality gate, not a corrective mechanism — it can only allow already-complete responses through or withhold incomplete ones; it does not add the missing regulatory clauses or cause the agent to actually produce a complete response. Since the goal is to improve the completeness of the responses users receive (not merely to filter out incomplete ones), a block-only evaluation flow does not by itself meet the goal unless it is paired with a regeneration or reflection step.\n\n**Learn more:** [Agent Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators)"
    },
    {
      "n": 21,
      "domain": "",
      "ctx": -1,
      "q": "You have a customer support agent built with the Microsoft Foundry Agent Service. The agent calls an Azure OpenAI model deployment.  \n  \nDuring load testing, calls intermittently fail with an HTTP 429 \"rate limit exceeded\" error.  \n  \nYou need to handle the throttling to reduce call failures and improve reliability under load. The solution must stay within the service and model limits.  \n  \nWhat should you do?",
      "choices": {
        "A": "Create a new thread and retry the calls immediately.",
        "B": "Reduce the number of registered tools.",
        "C": "Implement a retry policy that uses exponential backoff and jitter.",
        "D": "Spit uploaded content into smaller files."
      },
      "answer": "C",
      "exp": "The recommended pattern for handling Azure OpenAI HTTP 429 responses is a client-side retry policy that uses exponential backoff combined with random jitter (honoring any Retry-After header when present). This spreads retries out over time so the client automatically slows down and stays within the deployment's rate limit instead of repeatedly hammering it, improving reliability without requesting additional quota. Retrying immediately on a new thread only compounds the throttling, and reducing tool count or splitting uploaded files does not address a token/request-rate limit.\n\n**Learn more:** [Quotas and limits for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions)"
    },
    {
      "n": 22,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent that your company's financial analysts use.  \n  \nYou need to optimize the agent workflow by adding data access and processing capabilities that meet these requirements:  \n  \n- The agent must be able to perform calculations during conversations.  \n- The agent must be able to access up-to-date information from public websites.  \n- The agent must be able to retrieve information from documents uploaded directly to it.  \n  \nWhich tool should you use for each requirement? A tool can be used once, more than once, or not at all.\n\nItems:\n- Code interpreter\n- Computer use\n- File search\n- Grounding with Bing Search\n- Microsoft Fabric",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Access up-to-date information from public websites:</b> Grounding with Bing Search<br><b>Perform calculations during conversations:</b> Code interpreter<br><b>Retrieve information from documents uploaded directly to the agent:</b> File search",
      "exp": "Grounding with Bing Search lets an agent retrieve current, real-time information from the public web, which is required to answer with up-to-date information from public websites. Code interpreter runs code in a sandboxed execution environment, letting the agent perform calculations and data processing during a conversation. File search indexes and retrieves content from documents uploaded directly to the agent, satisfying the third requirement. Computer use and Microsoft Fabric are not designed for these scenarios: computer use drives a GUI/OS environment, and Microsoft Fabric integration targets enterprise data platform assets rather than files uploaded directly to the agent.\n\n**Learn more:** [Agent tools overview for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-catalog)"
    },
    {
      "n": 23,
      "domain": "",
      "ctx": -1,
      "q": "You need to configure the model deployment for Agent1 so that it satisfies the technical requirements. Which options should you configure?\n\nDeployment type: Standard / Global Standard / Global Provisioned\n\nVersion update policy: Once the current version expires / Opt out of automatic model version upgrades / Upgrade once a new default version becomes available",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Deployment type:</b> Standard<br><b>Version update policy:</b> Opt out of automatic model version upgrades",
      "exp": "Azure OpenAI/Foundry Models Standard (regional) deployments process inference only in the Azure region where the resource is deployed, giving the strongest data-residency guarantee, whereas Global Standard and Global Provisioned route requests across Azure's global infrastructure with no fixed-region guarantee. Because the project is deployed to an EU region and its data must remain within the EU, a Standard deployment is required; Global Provisioned is additionally unsuitable because Provisioned tiers reserve dedicated throughput capacity, which conflicts with a requirement to scale dynamically without reserved capacity. For the model version, opting out of automatic model version upgrades pins the deployment to a fixed model version so behavior and response quality stay consistent over time, rather than shifting whenever Microsoft retires or promotes a new default version.\n\n**Learn more:** [Understanding deployment types in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types)"
    },
    {
      "n": 24,
      "domain": "",
      "ctx": -1,
      "q": "You need to configure Agent1 so that it satisfies the security and compliance requirements.  \n  \nWhich capability should you use?",
      "choices": {
        "A": "self-harm content filtering",
        "B": "prompt shields",
        "C": "Personally identifiable information (PII) Detection",
        "D": "violence content filtering"
      },
      "answer": "B",
      "exp": "Prompt Shields is the Azure AI Content Safety capability integrated into Microsoft Foundry that detects and blocks both direct user prompt attacks and indirect \"document attacks\" — hidden instructions embedded in third-party content such as documents, images, emails, or web pages that attempt to hijack a model or agent session. Because the product sheets are external PDF files that can contain images with embedded text, enabling Prompt Shields protects the agent from acting on malicious instructions concealed in that embedded text, which is the specific requirement it satisfies. PII Detection instead identifies and redacts personal data in text and does not address instruction-injection attacks, while self-harm and violence content filtering address harmful-content categories rather than injected instructions.\n\n**Learn more:** [Prompt Shields in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields)"
    },
    {
      "n": 25,
      "domain": "",
      "ctx": -1,
      "q": "You need to recommend a solution for assessing the responses that Agent1 generates when it relies on the product information stored in storage1, and the solution must satisfy the technical requirements.  \n  \nWhat should you include in the recommendation?",
      "choices": {
        "A": "a Retrieval Augmented Generation (RAG) evaluator",
        "B": "a custom guardrail",
        "C": "model fine-tuning",
        "D": "a groundedness evaluator"
      },
      "answer": "A",
      "exp": "The technical requirement states that responses built from the product-sheet content must be relevant, complete, and accurate. Microsoft Foundry's Retrieval-Augmented Generation (RAG) evaluator set is the built-in evaluator category purpose-built for grounded, retrieval-based scenarios and combines retrieval quality, groundedness (factual accuracy against the retrieved source), relevance, and response-completeness metrics — directly covering all three qualities the requirement calls out. A standalone groundedness evaluator only scores factual accuracy/faithfulness to the retrieved context and does not by itself score relevance or completeness, so it would not fully validate the stated requirement on its own.\n\n**Learn more:** [Retrieval-Augmented Generation (RAG) Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators) · [Built-in Evaluators Reference - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators)"
    },
    {
      "n": 26,
      "domain": "",
      "ctx": -1,
      "q": "You need to configure Agent1 so that it answers customer questions only about Contoso products, in line with the business requirements.  \n  \nWhat should you do?",
      "choices": {
        "A": "Modify the system message instructions.",
        "B": "Add few-shot examples.",
        "C": "Apply top-p sampling.",
        "D": "Increase the value of the temperature parameter."
      },
      "answer": "A",
      "exp": "Restricting an agent's topical scope — instructing it to decline or redirect questions outside a defined product domain — is a persistent behavioral rule, and the system message is the mechanism that defines an agent's role, boundaries, and non-negotiable constraints across every turn of a conversation. Few-shot examples mainly shape output style and format rather than reliably enforcing a hard scope boundary, and top-p sampling and the temperature parameter only control output randomness/diversity, not what topics the agent is permitted to discuss.\n\n**Learn more:** [System message design for Azure OpenAI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering)"
    },
    {
      "n": 27,
      "domain": "",
      "ctx": -1,
      "q": "You need to recommend an invoice review solution that addresses the issue reported by the finance department.  \n  \nWhat should you include in the recommendation?",
      "choices": {
        "A": "chat completions",
        "B": "Azure Document Intelligence in Foundry Tools",
        "C": "Azure Content Understanding in Foundry Tools",
        "D": "Image Analysis"
      },
      "answer": "C",
      "exp": "The finance department's vendor invoices arrive with tables, logos, and highly varied layouts and must be verified against vendor contract terms, and the planned change calls for a solution that evaluates both the visual layout and the textual content of the invoices. Microsoft's own guidance for choosing between Content Understanding and Document Intelligence places invoices with inconsistent, high-variation templates in the \"high-variation semi-structured documents\" scenario, for which it recommends a Content Understanding analyzer because it generalizes across template and layout variation without labeling and can reason over extracted content, including cross-referencing values (such as against contract terms) — a reasoning capability Document Intelligence's structured field-extraction models do not provide. Document Intelligence's prebuilt invoice model is instead recommended for standardized, single-template forms, which does not match the varied-layout, cross-document-verification requirement described here; chat completions and Image Analysis provide neither document-structured field extraction nor layout-aware document reasoning.\n\n**Learn more:** [Choose the right Azure AI tool for document processing](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/choosing-right-ai-tool)"
    },
    {
      "n": 28,
      "domain": "",
      "ctx": -1,
      "q": "You need to configure an indexing pipeline for Agent1 so that it can retrieve the relevant product information from storage1. The solution must satisfy the technical requirement.  \n  \nWhich two built-in skills should you use? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
      "choices": {
        "A": "Azure OpenAI Embedding",
        "B": "Entity Recognition",
        "C": "Text Split",
        "D": "Merge",
        "E": "Language Detection",
        "F": "key phrase extraction"
      },
      "answer": "AC",
      "exp": "The technical requirement calls for an indexing pipeline that supports semantic and vector search over the PDF product sheets. In an Azure AI Search skillset, the Text Split skill chunks the extracted document text into passages sized appropriately for downstream processing, and the Azure OpenAI Embedding skill converts each chunk into a vector that is written to a vector field in the index. Together, these two built-in skills produce the chunked, vectorized content required for a semantic/vector search index; Entity Recognition, Merge, Language Detection, and Key Phrase Extraction are enrichment skills that do not generate the chunks or vectors needed to build the index.\n\n**Learn more:** [Text Split skill - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-textsplit) · [Azure OpenAI Embedding skill - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-azure-openai-embedding)"
    },
    {
      "n": 29,
      "domain": "",
      "ctx": -1,
      "q": "You need to recommend a solution that supports the planned changes and technical requirements so that Agent1 can use the product information stored in storage1.  \n  \nWhat should you include in the recommendation?",
      "choices": {
        "A": "Azure Translator in Foundry Tools",
        "B": "Grounding with Bing Search",
        "C": "Azure AI Search",
        "D": "Azure Document intelligence in Foundry Tools"
      },
      "answer": "C",
      "exp": "Azure AI Search is the retrieval service that implements the indexing pipeline described in the technical requirements: it ingests the PDF product sheets, chunks and vectorizes them through a skillset, and exposes a semantic/vector-enabled index that Agent1 can query as grounding data to answer natural-language product questions. Azure Translator only performs language translation, Grounding with Bing Search retrieves public web content rather than the private documents in storage1, and Azure Document Intelligence extracts document content but does not on its own provide indexing or retrieval capability.\n\n**Learn more:** [What's new in Azure AI Search / Integrated vectorization](https://learn.microsoft.com/en-us/azure/search/vector-search-integrated-vectorization) · [Retrieval Augmented Generation (RAG) overview - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)"
    },
    {
      "n": 30,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an internal Q&A agent.  \n  \nUsers report the following issues when they ask the agent questions:  \n  \n- An increasing number of \"No relevant information found\" responses.  \n- Periodic HTTP 429 rate limit exceeded errors during peak hours.  \n  \nYou need to determine whether each issue results from model unavailability, resource limits, or inference failures. What should you do?\n\nMetrics to enable: Model Availability Rate and Provisioned Utilization / Only Tokens Cache Match Rate / Only Total Requests filtered to status code 200 / Time To Response and Total Tokens\n\nDiagnostic log to collect: AllMetrics / audit / RequestResponse / trace",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Metrics to enable:</b> Model Availability Rate and Provisioned Utilization<br><b>Diagnostic log to collect:</b> RequestResponse",
      "exp": "Enabling the Model Availability Rate metric shows drops in model uptime that explain inference/unavailability-driven failures such as a rise in \"No relevant information found\" responses, while the Provisioned Utilization metric shows how much of the deployment's provisioned capacity is being consumed, which explains HTTP 429 rate-limit errors during peak load caused by resource limits. Collecting the RequestResponse diagnostic log records each call's operation name, duration, and HTTP status code, letting you correlate specific failed or throttled calls (including 429s) back to the metric-level signal for root-cause analysis; the Audit and Trace log categories do not provide this per-call status/duration detail, and AllMetrics is a metrics export category rather than a diagnostic log.\n\n**Learn more:** [Monitoring data reference for Azure OpenAI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/monitor-openai-reference) · [Enable diagnostic logging - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/diagnostic-logging)"
    },
    {
      "n": 31,
      "domain": "",
      "ctx": -1,
      "q": "You have an application that processes scanned PDF invoices. The invoices use varied layouts and include tables that span multiple pages.  \n  \nYour pipeline uses optical character recognition (OCR) to extract totals and invoice numbers, but the results are frequently incorrect because the document's structure is ignored.  \n  \nYou need a solution that provides OCR, layout analysis, and field extraction that generalizes across templates. The solution must NOT require training a custom model, and it must minimize administrative effort.  \n  \nWhat should you include in the solution?",
      "choices": {
        "A": "Azure Language in Foundry Tools",
        "B": "Azure Content Understanding in Foundry Tools",
        "C": "an Azure Machine Learning model"
      },
      "answer": "B",
      "exp": "For high-variation, semi-structured documents such as invoices from multiple vendors with inconsistent layouts, Microsoft recommends the Azure Content Understanding custom analyzer: it combines OCR, layout analysis, and field extraction, generalizes well across template and language variation, and requires no labeled training data to get started, which minimizes administrative effort. Azure Language in Foundry Tools performs text analytics rather than layout-aware field extraction, and building a solution on an Azure Machine Learning model would require training and maintaining a custom model, which the requirement explicitly rules out.\n\n**Learn more:** [Choose the right Azure AI tool for document processing](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/choosing-right-ai-tool)"
    },
    {
      "n": 32,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project named Project1 that contains an application for processing PDF vendor invoices.  \n  \nYou need to configure Azure Document Intelligence in Foundry Tools to produce Markdown output that preserves the sections and table structure of the PDFs. The solution must minimize development effort.  \n  \nWhat should you do?",
      "choices": {
        "A": "Configure output=figures when you analyze the PDF.",
        "B": "Configure content=markdown when you analyze the document.",
        "C": "Increase the confidence threshold.",
        "D": "Set the output_content_format=ContentFormat.MARKDOWN value."
      },
      "answer": "D",
      "exp": "The Document Intelligence analyze-document call accepts an output_content_format parameter; setting it to ContentFormat.MARKDOWN (outputContentFormat=markdown at the REST level) instructs the prebuilt-layout model to return the extracted content as GitHub-Flavored Markdown that preserves headings/sections and table structure. This requires only a single parameter change with no custom post-processing. \"output=figures\" and \"content=markdown\" are not valid SDK/API parameter names, and raising the confidence threshold has no bearing on the output format.\n\n**Learn more:** [Document Intelligence supported Markdown elements - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/markdown-elements?view=doc-intel-4.0.0) · [sample_analyze_documents_output_in_markdown.py - azure-sdk-for-python](https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/documentintelligence/azure-ai-documentintelligence/samples/sample_analyze_documents_output_in_markdown.py)"
    },
    {
      "n": 33,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that processes procurement documents submitted by suppliers. You need to implement two pipelines using Azure Content Understanding in Foundry Tools that meet the following requirements:  \n  \n- Pipeline1 must support cost-effective, high-volume processing of standalone PDF invoices.  \n- Pipeline2 must support cross-document validation using multi-step reasoning and reference data.  \n  \nHow should you configure each pipeline? Each configuration can be used once, more than once, or not at all.\n\nItems:\n- Multi-file task in pro mode\n- Multi-file task in standard mode\n- Single-file task in pro mode\n- Single-file task in standard mode",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Pipeline1:</b> Single-file task in standard mode<br><b>Pipeline2:</b> Multi-file task in pro mode",
      "exp": "Azure Content Understanding in Foundry Tools standard mode processes a single input document per task and is optimized for cost-effectiveness and low latency, making it the right fit for high-volume, standalone PDF invoice processing. Pro mode operates on multi-file tasks, supports supplying reference data at analyzer-creation time, and applies multi-step reasoning to validate and draw conclusions across documents (for example, checking whether an invoice matches a contract) - exactly the cross-document validation with reference data that the second pipeline requires.\n\n**Learn more:** [Azure Content Understanding in Foundry Tools standard and pro modes (preview)](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/standard-pro-modes)"
    },
    {
      "n": 34,
      "domain": "",
      "ctx": -1,
      "q": "You are building a web app named App1 that generates responses by using a model deployed to a Microsoft Foundry project named Project1.  \n  \nBefore sending prompts to the model, App1 must retrieve documents by using Azure AI Search.  \n  \nYou need to integrate Project1 and App1. The solution must meet the following requirements:  \n  \n- Multiple client applications must use the same search configuration.  \n- A security policy must prevent key-based authentication.  \n- Administrative effort must be minimized.  \n  \nWhat should you do?",
      "choices": {
        "A": "Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application.",
        "B": "Configure an Azure AI Search connection in Project1 and reference the connection in each application.",
        "C": "Call Azure AI Search directly from each application by using Microsoft Entra authentication.",
        "D": "Enable a managed identity for each application and call Azure AI Search directly."
      },
      "answer": "B",
      "exp": "Defining a single Azure AI Search connection at the Project1 level lets every client application reference the same centrally managed search configuration instead of duplicating endpoint and index settings per app. Microsoft Foundry project connections support Microsoft Entra ID (token-based, keyless) authentication, so no API keys need to be issued or rotated, satisfying the shared-configuration, no-key-based-auth, and low-administrative-overhead requirements at once. Building a custom per-app HTTP connection, or having each application call Azure AI Search directly (with or without its own managed identity), duplicates configuration across apps and increases ongoing administrative effort.\n\n**Learn more:** [Add a new connection to your project - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/connections-add) · [Connect an Azure AI Search index to Foundry agents](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/ai-search)"
    },
    {
      "n": 35,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure Speech in Foundry Tools resource that hosts a custom speech-to-text model deployed to a custom endpoint, and an agent uses that endpoint for real-time speech recognition.  \n  \nThe custom speech-to-text model is nearing its expiration date.  \n  \nWhat is the expected behavior once the model expires?",
      "choices": {
        "A": "Speech recognition requests will return a 4xx error until a new custom model is deployed.",
        "B": "Speech recognition requests will continue to use the expired custom model until the model is removed manually.",
        "C": "Speech recognition requests will fall back to the most recent base model for the same locale.",
        "D": "The custom model will be deleted automatically when the model expires."
      },
      "answer": "C",
      "exp": "Custom Speech models and their deployed endpoints follow a defined lifecycle with an expiration date. When a custom model reaches that date, the associated custom endpoint does not shut down or begin returning errors; instead, the Speech service automatically falls back to using the most recent base model for the same locale, so recognition requests keep succeeding, only losing the custom adaptation rather than failing outright. The endpoint is not deleted automatically, and expired custom models are not retained indefinitely for continued use without manual intervention.\n\n**Learn more:** [Model and endpoint lifecycle of Custom Speech](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-custom-speech-model-and-endpoint-lifecycle)"
    },
    {
      "n": 36,
      "domain": "",
      "ctx": -1,
      "q": "Your Microsoft Foundry project includes a customer support agent that calls an internal knowledge API tool before it generates responses.  \n  \nUsers are reporting the following issues:  \n  \n- Certain requests take longer than 15 seconds to complete.  \n- Certain responses are incorrect, even though the knowledge API returns the expected data.  \n  \nYou need to inspect individual agent runs to view the ordered sequence of large language model (LLM) calls, tool invocations, and timing information.  \n  \nWhich observability capability should you use?",
      "choices": {
        "A": "token usage",
        "B": "monitoring",
        "C": "safety metrics",
        "D": "tracing"
      },
      "answer": "D",
      "exp": "Tracing in Microsoft Foundry captures, for each individual agent run, an ordered sequence of spans covering LLM calls, tool invocations, and their durations, letting you follow exactly what happened inside a single run to diagnose both the latency spikes and the cases where a correct tool result still produced a wrong response. Token usage, monitoring dashboards, and safety metrics are aggregate signals collected across many runs and do not expose the ordered, per-run call sequence needed for this kind of root-cause inspection.\n\n**Learn more:** [Trace and Observe AI Agents in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/concepts/tracing)"
    },
    {
      "n": 37,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that ingests scanned PDF invoices stored in Azure Blob Storage. Each invoice contains printed line items and uses a table-based layout.  \n  \nThe extracted results are stored as structured JSON and used as grounding data for an agent in a Retrieval Augmented Generation (RAG) solution.  \n  \nYou need to create a single analyzer that meets the following requirements:  \n  \n- Extracts the invoice number, invoice date, vendor name, and total amount across varying templates  \n- Returns confidence scores so that results with confidence below 0.80 can be routed for supervisor review  \n  \nWhat should you use?",
      "choices": {
        "A": "a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores",
        "B": "a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the extracted fields and the returned confidence scores for routing",
        "C": "the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer",
        "D": "the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing"
      },
      "answer": "B",
      "exp": "A custom Content Understanding analyzer lets you define the exact schema of fields to extract — invoice number, invoice date, vendor name, and total amount — regardless of the invoice template, and enabling estimateFieldSourceAndConfidence (or estimateSourceAndConfidence per field) causes the analyzer to return a confidence score for each extracted field. Those scores can then be compared against the 0.80 threshold to route low-confidence results for supervisor review. The prebuilt-layout analyzer only extracts generic layout elements (text, tables) without the named business fields, prebuilt-documentSearch plus Azure AI Search's search.score reflects retrieval relevance rather than field-extraction confidence, and a Foundry agent with groundedness guardrails evaluates response grounding, not per-field extraction confidence.\n\n**Learn more:** [Document analysis with confidence, grounding, and labeled samples - Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/analyzer-improvement) · [What is an analyzer? Configuration and reference - Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference)"
    },
    {
      "n": 38,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.  \n  \nYou need to improve the completeness of the responses. The solution must be implemented in the application code's logic before the responses are returned.  \n  \nWhat should you do?",
      "choices": {
        "A": "Add a retry evaluation before the responses are returned.",
        "B": "Decrease the value of the max_tokens parameter.",
        "C": "Switch to Retrieval Augmented Generation (RAG).",
        "D": "Replace the model with a smaller deployment."
      },
      "answer": "A",
      "exp": "A completeness check-and-retry step implemented in the application's own request/response pipeline — evaluating the draft response for required content and re-invoking generation before the response is handed back to the caller — enforces completeness at the code layer without changing the model or the retrieval design. Decreasing max_tokens or deploying a smaller model both reduce the model's ability to produce complete output, and switching to RAG changes how content is retrieved rather than adding an in-code completeness check prior to returning the response.\n\n**Learn more:** [Agent Evaluators for Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators)"
    },
    {
      "n": 39,
      "domain": "",
      "ctx": -1,
      "q": "Your company is piloting a customer support agent within a Microsoft Foundry project called Project1. Project1 is connected to an existing Application Insights resource, and the support team reviews runs on the Traces tab.\n\nThe Foundry Agent Service is set up to:\n- Retrieve the Application Insights connection string by calling `project_client.telemetry.get_application_insights_connection_string()`.\n- Call `configure_azure_monitor(connection_string=...)` to enable telemetry.\n\nA separate LangChain service uses OpenTelemetry and is configured as follows:\n- It uses `AzureAIOpenTelemetryTracer(connection_string=..., enable_content_recording=False)`.\n- It passes the tracer with `config={\"callbacks\":[azure_tracer]}`.\n\nCompany policy requires that:\n- Telemetry from LangChain and OpenTelemetry must be distinguishable within the same Application Insights resource.\n- Secrets and credentials must not be stored in prompts, tool arguments, or span attributes.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- The LangChain service will appear in Traces without configuring a tracer.\n- Setting different OTEL_SERVICE_NAME values separates the services in Application Insights.\n- When using enable_content_recording=False, prompts and tool data will be captured in the telemetry.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>The LangChain service will appear in Traces without configuring a tracer. — <b>No</b><br>Setting different OTEL_SERVICE_NAME values separates the services in Application Insights. — <b>Yes</b><br>When using enable_content_recording=False, prompts and tool data will be captured in the telemetry. — <b>No</b>",
      "exp": "AzureAIOpenTelemetryTracer must be explicitly created and attached to a LangChain/LangGraph run (for example, via config={\"callbacks\": [tracer]}) for that service's spans to be exported to Application Insights; without configuring a tracer for a given process, that process's telemetry is not automatically captured there. Application Insights differentiates telemetry from multiple services within a single resource by the underlying OpenTelemetry service.name resource attribute, commonly set through the OTEL_SERVICE_NAME environment variable, which becomes the cloud role name shown in Azure Monitor - giving each service its own identifiable role even though both write to the same Application Insights resource. Setting enable_content_recording=False on AzureAIOpenTelemetryTracer redacts message content and tool call arguments from the emitted spans, so prompts and tool data are NOT captured in the telemetry when this flag is False, which is what satisfies the requirement that secrets and credentials not be stored in prompts, tool arguments, or span attributes.\n\n**Learn more:** [Trace LangChain and LangGraph apps with Microsoft Foundry and Azure Monitor](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/langchain-traces)"
    },
    {
      "n": 40,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing a deployed ticket-triage agent.  \n  \nYou notice that the agent sometimes responds without calling any tools, even in cases where a tool is required.  \n  \nYou need to ensure the agent calls a tool during execution. How should you complete the Python code? A value can be used once, more than once, or not at all.\n\nItems:\n- \"auto\"\n- \"required\"\n- \"response_format\"\n- \"tool_choice\"\n- \"tools\"\n- \"type\"",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> &quot;tool_choice&quot;<br><b></b> &quot;required&quot;",
      "exp": "Adding \"tool_choice\": \"required\" to the run payload forces the Foundry Agent Service to invoke an available tool on every run instead of allowing the model to respond directly without calling one, which resolves the ticket-triage agent's intermittent tool-skipping behavior; the default auto value permits the model to skip tool calls, which is the exact condition being reported.\n\n**Learn more:** [Tool best practices for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice)"
    },
    {
      "n": 41,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains a high-traffic agent. Following a recent update, operational costs rise significantly, even though monitoring confirms that the volume of user traffic to the agent has stayed the same.  \n  \nYou suspect that changes to the request or response characteristics are behind the increase, and you need to determine whether the added cost comes from the model input size, the model output size, or expanded tool usage.  \n  \nWhich observability capability should you use?",
      "choices": {
        "A": "latency",
        "B": "evaluation metrics",
        "C": "run success rate",
        "D": "token usage"
      },
      "answer": "D",
      "exp": "Token usage telemetry breaks down consumption into prompt (input) tokens, completion (output) tokens, and the additional tokens consumed by tool or function calls on each run, so it can directly attribute a cost increase to whichever of those components grew — larger inputs, longer outputs, or heavier tool invocation — even when the number of requests stays constant. Latency measures response time, evaluation metrics assess response quality, and run success or failure rate measures reliability; none of these decompose cost by input size, output size, or tool usage the way token usage telemetry does.\n\n**Learn more:** [Observability in Generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability)"
    },
    {
      "n": 42,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent.  \n  \nThe agent's knowledge source is a set of scanned PDF troubleshooting guides stored in Azure Blob Storage. The guide pages use two-column layouts and contain tables. You use Azure Content Understanding in Foundry Tools to process the PDFs, and you plan to ingest the processed content into an index for Retrieval Augmented Generation (RAG) while storing the extracted fields for downstream automation.  \n  \nStakeholders need to be able to verify where each extracted field value originated in the original PDF, and route low-reliability extractions for manual review.  \n  \nYou need the Content Understanding document analyzer output to include a per-field confidence score and source grounding to locations within the source document.  \n  \nWhat should you do?",
      "choices": {
        "A": "Set enableSegment to true.",
        "B": "Provide labeled samples.",
        "C": "Enable estimateFieldSourceAndConfidence.",
        "D": "Configure the analyzer to use generative extraction for all fields."
      },
      "answer": "C",
      "exp": "estimateFieldSourceAndConfidence is an opt-in Content Understanding analyzer property (settable at the analyzer level or per field) that, for extractive fields, adds a confidence score between 0 and 1 plus source grounding — the page number and bounding region — for each extracted field value. This is exactly what enables verifying where a value came from in the source PDF and routing low-confidence extractions to human review. enableSegment controls document segmentation rather than confidence/grounding, providing labeled samples improves extraction accuracy over time but does not itself produce confidence-and-grounding output, and configuring generative extraction for all fields changes the extraction method but does not, by itself, enable per-field confidence and source grounding.\n\n**Learn more:** [Document analysis with confidence, grounding, and labeled samples](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/analyzer-improvement)"
    },
    {
      "n": 43,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains three agents, as shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783676237999-9kfjzr06.png)  \n  \nYou need to orchestrate these agents so that handling of customer requests meets the following requirements:  \n  \n- Support a deterministic, step-based process that uses conditional branching and shared state across the agents.  \n- Optionally trigger a ticket action based on the triage result.  \n- Minimize development effort.  \n  \nWhat should you include in the solution?",
      "choices": {
        "A": "a workflow",
        "B": "threads and runs without a workflow",
        "C": "a multi-agent group chat session",
        "D": "separate agent runs coordinated in the application code"
      },
      "answer": "A",
      "exp": "Microsoft Foundry Agent Service workflows provide a low-code, graph-based way to orchestrate multiple agents through a deterministic, step-based process: executors (agents or logic steps) are connected by edges that support conditional branching (if/else) and can pass shared state between steps, including an optional downstream action such as invoking a ticketing tool based on an earlier agent's triage result. This satisfies the requirement for deterministic branching with shared state while minimizing development effort, since the branching and state-passing logic does not need to be hand-written. Using threads and runs directly, or coordinating separate agent runs in application code, requires custom-written orchestration logic, and a multi-agent group chat session is a conversational, non-deterministic collaboration pattern rather than a deterministic branching process.\n\n**Learn more:** [Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)"
    },
    {
      "n": 44,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that generates product marketing images from text prompts.  \n  \nAfter several images are published, your company's legal team identifies a competitor's logo on a sign in the background of one of the images.  \n  \nYou need to remove only the logo while preserving the rest of the image.  \n  \nWhat should you do?",
      "choices": {
        "A": "Apply a mask-based inpainting edit to the part of the image that contains the logo.",
        "B": "Increase the prompt guidance strength.",
        "C": "Modify the original prompt to exclude brand names.",
        "D": "Rerun the prompt by using a different random seed."
      },
      "answer": "A",
      "exp": "Mask-based inpainting lets you constrain an edit to a specific region by supplying a mask over just the logo, so only the pixels inside that region are regenerated while the rest of the image is left unchanged. Increasing prompt guidance strength, editing the prompt, or changing the random seed all cause the model to regenerate the image broadly (or produce a different image entirely), with no guarantee that only the logo is affected and the rest of the composition is preserved.\n\n**Learn more:** [How to use image generation models from OpenAI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e)"
    },
    {
      "n": 45,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains a model deployment, and an application calls that deployment by using the Azure OpenAI v1 API together with DefaultAzureCredential.  \n  \nDevelopers at your company receive HTTP 403 errors when they send inference requests, even after they run `az login`.  \n  \nYou need to ensure that the developers can perform model inference, and the solution must follow the principle of least privilege.  \n  \nWhich role-based access control (RBAC) role should you assign to the developers?",
      "choices": {
        "A": "Cognitive Services User",
        "B": "Cognitive Services OpenAI User",
        "C": "Contributor",
        "D": "Cognitive Services Data Reader"
      },
      "answer": "B",
      "exp": "Cognitive Services OpenAI User is the built-in RBAC role that grants the data-plane permission required to perform inference calls (such as chat completions) against an Azure OpenAI/Foundry model deployment when authenticating with Microsoft Entra ID, for example via DefaultAzureCredential; it grants no control-plane management rights, which satisfies least privilege. Cognitive Services User grants access to other Cognitive Services data actions but not Azure OpenAI inference, Contributor grants broad resource-management permissions far beyond what is needed, and Cognitive Services Data Reader only allows reading metadata/configuration rather than invoking inference — none of these three resolve the 403 with a least-privilege assignment as directly as Cognitive Services OpenAI User.\n\n**Learn more:** [Role-based access control for Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/role-based-access-control)"
    },
    {
      "n": 46,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that uses Azure AI Search to ground an agent in internal documentation.  \n  \nAfter a recent content update, users report that the agent's answers have become less accurate.  \n  \nYou need to determine whether the retrieved content is negatively affecting the model's generated responses.  \n  \nWhich observability signal should you review?",
      "choices": {
        "A": "indexer status and failure history",
        "B": "latency breakdown traces",
        "C": "prediction drift metrics",
        "D": "groundedness evaluation metrics"
      },
      "answer": "D",
      "exp": "Groundedness evaluation metrics in Microsoft Foundry observability measure whether a generated response is actually supported by the content retrieved for the agent, so a drop in groundedness after a content update points directly at the retrieved content as the source of degraded answer quality. Indexer status and failure history only indicate whether ingestion succeeded, latency breakdown traces show performance timing, and prediction drift metrics track changes in model output distribution over time — none of these directly reveal whether the retrieved content is undermining response accuracy.\n\n**Learn more:** [Observability in generative AI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability) · [Generally Available: Evaluations, Monitoring, and Tracing in Microsoft Foundry](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/generally-available-evaluations-monitoring-and-tracing-in-microsoft-foundry/4502760)"
    },
    {
      "n": 47,
      "domain": "",
      "ctx": -1,
      "q": "You have a chat application in a Microsoft Foundry project and a vectorized index in Azure AI Search.  \n  \nYou need to connect to the index so that the solution meets the following requirements:  \n  \n- Complex questions must retrieve information from multiple chunks.  \n- Multi-turn conversations must influence retrieval planning.  \n- Retrievals must run in parallel to reduce latency.  \n  \nWhich retrieval approach should you use?",
      "choices": {
        "A": "iterative retrieval",
        "B": "agentic Retrieval Augmented Generation (RAG)",
        "C": "chain of thought",
        "D": "classic Retrieval Augmented Generation (RAG)"
      },
      "answer": "B",
      "exp": "Agentic retrieval in Azure AI Search uses an LLM-backed knowledge agent that decomposes a complex user question into multiple focused subqueries, incorporates conversation history into query planning, executes the subqueries in parallel against the underlying knowledge source(s), and then semantically reranks and merges the results — satisfying multi-chunk retrieval, conversation-aware planning, and reduced latency at the same time. Classic RAG issues a single retrieval call per turn with no decomposition or parallelism, iterative retrieval performs sequential (not parallel) retrieval rounds, and chain of thought is a prompting technique unrelated to retrieval architecture.\n\n**Learn more:** [Agentic retrieval overview - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview)"
    },
    {
      "n": 48,
      "domain": "",
      "ctx": -1,
      "q": "You have a customer support agent that uses the Microsoft Foundry Agent Service.  \n  \nCustomers sometimes return to a session days later to continue the same support case, and the agent must resume with the full historical context. The agent must provide:  \n  \n- Multi-turn continuity within the session.  \n- Cross-session continuity for the same case.  \n- Access to the full interaction history, including user messages, agent messages, tool calls, and tool outputs.  \n  \nYou need to ensure that the agent automatically reloads the complete history on every new turn.  \n  \nWhat should you do?",
      "choices": {
        "A": "Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent requests.",
        "B": "Persist only the final model response stored in the client application and prepend the response to future prompts.",
        "C": "Enable memory summarization on the agent definition to persist the context automatically."
      },
      "answer": "A",
      "exp": "The Foundry Agent Service persists the full interaction history — user messages, agent messages, tool calls, and tool outputs — server-side under a durable conversation identifier. Storing that conversation ID and supplying it on every subsequent request causes the service to automatically reload the complete history for that case on each new turn, giving both multi-turn continuity within a session and cross-session continuity when the customer returns later. Persisting only the final model response discards all tool-call and tool-output detail, and enabling memory summarization condenses the history into a summary rather than reloading it in full.\n\n**Learn more:** [Build with agents, conversations, and responses in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components)"
    },
    {
      "n": 49,
      "domain": "",
      "ctx": -1,
      "q": "You have an application named App1 that uses a Microsoft Foundry multimodal model deployment.  \n  \nApp1 performs optical character recognition (OCR) on uploaded images and appends the OCR results to the prompt as additional context. Some of the uploaded images contain embedded text.  \n  \nYou need to prevent the model from processing potentially malicious instructions contained in that text.  \n  \nWhat should you use?",
      "choices": {
        "A": "image moderation",
        "B": "prompt shields for documents",
        "C": "protected material text",
        "D": "prompt shields for user prompts"
      },
      "answer": "B",
      "exp": "Azure AI Content Safety Prompt Shields analyzes two distinct attack surfaces: User Prompts, for direct jailbreak attempts typed by the user, and Documents, for indirect (cross-domain) prompt-injection attacks in which malicious instructions are hidden inside third-party content — such as documents, emails, or, as here, OCR text extracted from an image — that is appended to the prompt as additional context rather than authored by the user. Because the embedded text arrives as external content folded into the prompt, Prompt Shields for documents is the control designed to detect and block instructions hidden in it. Image moderation screens for visual harm categories, not instructions; protected material detection targets copyrighted content; and Prompt Shields for user prompts addresses direct user-typed jailbreak attempts, not third-party content.\n\n**Learn more:** [Prompt Shields in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection) · [Quickstart: Detect prompt attacks with Prompt Shields](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-jailbreak)"
    },
    {
      "n": 50,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent and an image-generation model deployment.  \n  \nThe agent generates new images from user-supplied product photos.  \n  \nYou need to ensure that the generated images retain the product's identity and visual characteristics from the supplied photo.  \n  \nWhat should you do?",
      "choices": {
        "A": "Set the input_fidelity parameter to high.",
        "B": "Apply a groundedness detection filter.",
        "C": "Include a prompt and input image in the request.",
        "D": "Decrease the value of the temperature parameter."
      },
      "answer": "A",
      "exp": "The input_fidelity parameter on an image edit request controls how closely the generated output preserves the visual details, identity, and features of the input image; setting it to high is intended precisely for edits involving faces, logos, or products where those details must be maintained in the output, at the cost of consuming more image input tokens than the default. Including a prompt and input image is simply what any image-edit call requires and does not by itself control identity preservation, a groundedness detection filter checks textual claims against source content (unrelated to image fidelity), and lowering temperature affects sampling randomness rather than image-edit fidelity.\n\n**Learn more:** [Generate images with high input fidelity](https://cookbook.openai.com/examples/generate_images_with_high_input_fidelity)"
    },
    {
      "n": 51,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent.  \n  \nThe agent uses a knowledge source built from documents stored in Azure Blob Storage. The documents include digitally scanned PDFs containing tables that span multiple pages.  \n  \nYour current ingestion job extracts only plain text, which causes the loss of table structure, headings, and page-number metadata. Users frequently ask questions that require retrieving specific table rows across pages.  \n  \nYou need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that:  \n\n- Performs optical character recognition (OCR) on the scanned PDFs  \n- Preserves tables and headings as structure-aware chunks  \n- Stores page-number metadata with each chunk  \n  \nHow should you configure the ingestion job?",
      "choices": {
        "A": "Use advanced data parsing to reingest the documents.",
        "B": "Use OCR and page-level chunking.",
        "C": "Use page-level OCR extraction and store each page as a single chunk.",
        "D": "Use basic parsing and fixed-size chunking."
      },
      "answer": "A",
      "exp": "Advanced data parsing for Foundry knowledge-source ingestion performs OCR (including on scanned documents), detects and merges tables that span multiple pages while restoring column headers, preserves headings and document hierarchy, and produces semantic, structure-aware chunks that carry page-number and heading metadata — exactly the combination of OCR plus structure-aware, page-attributed chunking the scenario requires. Reingesting with advanced data parsing replaces the current plain-text extraction and directly resolves the described problem. Basic OCR with page-level chunking, or storing each whole page as a single chunk, still loses row-level table structure because a whole page (or plain OCR run) is not decomposed into structure-aware units, and basic parsing with fixed-size chunking ignores document structure entirely.\n\n**Learn more:** [Data parsing for Agentic Retrieval in Foundry](https://learn.microsoft.com/en-us/azure/azure-arc/agents-tools-foundry-local/advanced-data-parsing)"
    },
    {
      "n": 52,
      "domain": "",
      "ctx": -1,
      "q": "Proposed solution: Configure a prompt shield for user prompts.  \n  \nDoes this solution meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "Prompt Shields for User Prompts is designed to detect direct jailbreak attempts typed by the user into the conversation; it does not inspect third-party content such as text extracted from an uploaded image, so it cannot catch instructions hidden inside images. It also performs no image-content moderation. Because the stated risk covers both unsafe image content and indirect (document-style) prompt injection carried inside image text, a user-prompt shield alone leaves both problems unmitigated.\n\n**Learn more:** [Prompt Shields in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection)"
    },
    {
      "n": 53,
      "domain": "",
      "ctx": -1,
      "q": "Proposed solution: Configure image moderation to block unsafe content before the images are processed.  \n  \nDoes this solution meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "Azure AI Content Safety image moderation screens visual content against harm categories such as violence, sexual content, self-harm, and hate, which addresses the unsafe-image half of the risk. It does not analyze any text extracted from the image for embedded instructions, so hidden prompt-injection content passed through OCR/text-extraction still reaches the model unmitigated, leaving the goal only partially met.\n\n**Learn more:** [Harm categories in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/harm-categories) · [Quickstart: Analyze image content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image)"
    },
    {
      "n": 54,
      "domain": "",
      "ctx": -1,
      "q": "Proposed solution: Configure a prompt shield for documents.  \n  \nDoes this solution meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "Prompt Shields for Documents inspects content the model did not receive directly from the user — such as text extracted from an uploaded image — for embedded, indirect prompt-injection instructions, which addresses the hidden-instruction half of the risk. It performs no visual content moderation, however, so it does not detect or block unsafe (violent, explicit, or otherwise inappropriate) image content, leaving that half of the stated risk unaddressed.\n\n**Learn more:** [Prompt Shields in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection) · [Quickstart: Analyze image content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image)"
    },
    {
      "n": 55,
      "domain": "",
      "ctx": -1,
      "q": "Proposed solution: Configure protected material detection.  \n  \nDoes this solution meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "Protected material detection scans AI-generated output for known copyrighted or licensed third-party content, such as song lyrics, articles, or public source code, so the output does not reproduce it verbatim. It has no role in screening uploaded images for unsafe content and no role in detecting instructions hidden inside image text, so it does not address either part of the stated risk.\n\n**Learn more:** [Protected material detection in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/protected-material)"
    },
    {
      "n": 56,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent named PaymentAgent. PaymentAgent has a function tool that issues customer refunds through an external API. You are authoring a workflow in YAML and need the workflow to pause for human approval, proceeding to the refund step only once approval has been granted.  \n  \nHow should you complete the workflow definition?\n\n ask_question / basic_chat / data_transformation\n\n approval == \"approved\" / propose_refund.output != null / true",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> ask_question<br><b></b> approval == &quot;approved&quot;",
      "exp": "Microsoft Foundry's human-in-the-loop workflow pattern uses an Ask a question step to pause execution and wait for a person's response before continuing, which is the mechanism used to gate the refund on human approval; a basic chat (send-message) step does not wait for input, and a data-transformation step only sets or parses a variable. The subsequent refund step's condition must test the value captured by the approval step, so condition: approval == \"approved\" only proceeds when the human explicitly approved the request; checking propose_refund.output != null merely confirms the initial proposal produced output (not that anyone approved it), and a literal true would execute the refund unconditionally, defeating the approval gate.\n\n**Learn more:** [Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)"
    },
    {
      "n": 57,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent.  \n  \nThe agent uses Azure AI Search as its retriever. You plan to ingest PDFs into an Azure AI Search index so the agent can ground its responses in text from both the documents and their embedded images. Users require citations that link back to the source files.  \n  \nYou need to ensure that, during indexing, the images are extracted into a structure that the built-in optical character recognition (OCR) skill can use as input.  \n  \nWhich indexing approach should you use?",
      "choices": {
        "A": "an indexer to extract image data into a normalized_images collection",
        "B": "a Shaper skill to restructure the OCR input",
        "C": "a skillset to run the OCR skill directly against the content field of the index",
        "D": "the outputFieldMappings parameter to write image data to a searchable field"
      },
      "answer": "A",
      "exp": "In Azure AI Search, setting an indexer's imageAction to generateNormalizedImages during document cracking extracts embedded images from source files (such as PDFs) into a normalized_images field/collection. Skills that operate on images, including the built-in OCR skill, expect this normalized_images collection as their input context (\"/document/normalized_images/*\"); images cannot be fed to OCR without first being normalized this way. A Shaper skill only restructures existing enrichment output, running OCR directly against the content field is invalid because OCR requires image input rather than the document's text content, and outputFieldMappings maps enrichment results to searchable index fields but does not extract images in the first place.\n\n**Learn more:** [OCR skill - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-ocr) · [Extract text from images by using AI enrichment (image scenarios)](https://learn.microsoft.com/en-us/azure/search/cognitive-search-concept-image-scenarios)"
    },
    {
      "n": 58,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains a prompt agent used by a customer support web app.  \n  \nThe agent is invoked from a Python service that does not run in the Foundry portal.  \n  \nYou need to implement end-to-end tracing to capture latency breakdowns and exceptions across agent runs.  \n  \nWhich two components can you use? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
      "choices": {
        "A": "a Log Analytics workspace",
        "B": "Application Insights",
        "C": "OpenTelemetry",
        "D": "the Azure Monitor Agent",
        "E": "Microsoft Sentinel"
      },
      "answer": "BC",
      "exp": "OpenTelemetry lets you instrument the external Python service to emit standardized spans covering LLM calls, tool invocations, latency, and exceptions even though it runs outside the Foundry portal, and Application Insights (Azure Monitor) is the backend Microsoft Foundry uses to ingest, store, and visualize those OpenTelemetry traces end to end. Together they form a complete, code-level tracing solution for an agent invoked from external code. A Log Analytics workspace is only the underlying data store behind Application Insights rather than a tracing capability in its own right, and Azure Monitor Agent and Microsoft Sentinel are infrastructure-monitoring and SIEM tools, not per-run agent tracing mechanisms.\n\n**Learn more:** [Configure tracing for AI agent frameworks - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-framework) · [Add client-side tracing to Foundry agents - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-client-side)"
    },
    {
      "n": 59,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent.  \n  \nYou need to process mixed-format documents containing scanned text, tables, and multicolumn layouts. The extracted content must preserve the document's structure and be converted to Markdown format for downstream reasoning.  \n  \nWhat should you configure first?",
      "choices": {
        "A": "an Azure Language in Foundry Tools text analysis model deployment",
        "B": "a generative chat completion request",
        "C": "an Azure OpenAI Responses API call that uses a multimodal model",
        "D": "an Azure Content Understanding in Foundry Tools analyzer"
      },
      "answer": "D",
      "exp": "Azure Content Understanding in Foundry Tools is purpose-built to convert mixed-format documents — including scanned text, tables, and multicolumn layouts — into structured, layout-preserving Markdown output that downstream agents and reasoning models can consume. It is the recommended first step in a document-processing pipeline because it produces structure-aware output before any generative reasoning happens. An Azure Language text-analysis deployment performs text analytics (not structural extraction), a generic chat-completion request has no document-parsing capability of its own, and calling the Responses API with a multimodal model reasons over content but does not itself perform structure-preserving OCR and Markdown conversion.\n\n**Learn more:** [Azure Content Understanding document overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/document/overview)"
    },
    {
      "n": 60,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing a deployed chat model.  \n  \nA Python service sends API requests to the model. The service is integrated with an automated validation system that compares the generated output against approved response patterns.  \n  \nStakeholders report that minor wording differences are causing validation mismatches.  \n  \nYou need to update the request parameters to improve output stability while maximizing reasoning quality. How should you complete the Python code?\n\n 0 / 1 / 2\n\n \"high\" / \"low\" / \"medium\"",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> 0<br><b></b> &quot;high&quot;",
      "exp": "Setting temperature to 0 removes sampling randomness so the model's output becomes as deterministic as possible for the same input, which eliminates the small wording variations that were breaking pattern-based output validation. Setting the reasoning effort to \"high\" allocates the model the greatest amount of reasoning computation before it produces a response, which satisfies the requirement to maximize reasoning quality; \"low\" and \"medium\" trade reasoning depth for speed and would not maximize quality, and temperature values above 0 increase output variability rather than stability.\n\n**Learn more:** [Azure OpenAI reasoning models - GPT-5 series, o3-mini, o1, o1-mini](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/reasoning)"
    },
    {
      "n": 61,
      "domain": "",
      "ctx": -1,
      "q": "You are building an image-editing workflow in a Microsoft Foundry project.  \n  \nThe workflow must meet the following requirements:  \n  \n- Background objects can be removed by applying a mask-based inpainting edit.  \n- The original lighting and style of the edited images are preserved.  \n- The built-in image editing controls are used, NOT a custom model.  \n  \nYou need to ensure that image edits are applied exclusively inside the masked area.  \n  \nHow should you configure the workflow?",
      "choices": {
        "A": "Set generation mode to image_variation and provide the original image as a reference.",
        "B": "Enable text_to_image mode and a prompt describing the desired background removal.",
        "C": "Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt.",
        "D": "Enable mask_inpainting and supply both the input image and a mask indicating which part of the image to modify."
      },
      "answer": "D",
      "exp": "Mask-based inpainting is the built-in image-editing mode designed to constrain edits to a specific region: you supply the original image together with a mask that marks exactly which pixels may change, and the model regenerates content only inside the masked region while leaving everything outside it — including the surrounding lighting and style — untouched. image_variation and text_to_image regenerate broadly without any mask constraint, and image_to_image at high strength regenerates the entire image rather than a bounded region.\n\n**Learn more:** [How to use image generation models from OpenAI - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e)"
    },
    {
      "n": 62,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that serves a high-volume chat application. Most of the requests are simple FAQs, but some require advanced reasoning.  \n  \nYou need to reduce cost and latency for the common queries without degrading the quality of responses to the complex questions.  \n  \nWhat should you do?",
      "choices": {
        "A": "Route all the requests to a smaller model.",
        "B": "Use a model cascade that routes the requests to different models.",
        "C": "Increase the value of the max_tokens parameter for all the requests.",
        "D": "Route all the requests to the most capable model."
      },
      "answer": "B",
      "exp": "A model cascade (model routing) evaluates each request and forwards simple queries to a small, fast, inexpensive model while escalating requests that need advanced reasoning to a larger, more capable model, so common FAQ traffic is served cheaply and quickly while complex questions still reach a capable model, preserving their answer quality. Routing every request to a smaller model would degrade the complex answers, routing everything to the most capable model keeps cost and latency high even for simple queries, and increasing max_tokens changes how much output a response can contain, not which model handles the request or its cost and latency profile.\n\n**Learn more:** [Model router for Microsoft Foundry concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router)"
    },
    {
      "n": 63,
      "domain": "",
      "ctx": -1,
      "q": "You are creating an agent workflow in a Microsoft Foundry project to support natural voice interactions.  \n  \nThe agent must receive continuous audio input, convert that input into text for reasoning, and return spoken responses to the user. The workflow must meet the following requirements:  \n\n- Support turn-taking dynamics, where the agent can begin generating speech output before the user finishes speaking  \n- Operate with low latency to maintain a conversational experience  \n  \nYou need to enable both speech-to-text and text-to-speech in a real-time agent interaction.  \n  \nWhat should you do?",
      "choices": {
        "A": "Use batch transcription to convert the audio input and return text responses from the agent.",
        "B": "Use real-time speech to text for incoming audio and text to speech for agent responses.",
        "C": "Use an embeddings model to encode the audio, and then decode the audio into text and speech.",
        "D": "Use speech translation to convert the audio into another language and return the translated text."
      },
      "answer": "B",
      "exp": "Real-time speech to text continuously converts streaming audio into text with low latency as the user speaks, while text to speech synthesizes the agent's textual response into audio; used together, this pairing supports the low-latency, turn-taking conversational dynamics the scenario requires, including the agent beginning to respond before the user has fully finished speaking. Batch transcription processes recorded files asynchronously and cannot support live turn-taking, an embeddings model encodes data for similarity/retrieval rather than performing transcription or synthesis, and speech translation changes the spoken language rather than enabling a spoken response to be generated.\n\n**Learn more:** [What is real-time speech to text?](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text) · [What is text to speech?](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech)"
    },
    {
      "n": 64,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent.  \n  \nThe agent uses tools to retrieve internal content and call external APIs, and it is currently configured to let the model decide when to invoke those tools.  \n  \nYou need to publish the agent for a compliance workflow that meets these requirements:  \n  \n- Every workflow run must perform a retrieval step before a response is generated.  \n- Tool calls must authenticate using the published agent's own identity.  \n- Tool access must use an identity that is isolated from other project resources.  \n- Tool access must support audit tracing.  \n  \nWhat should you configure?\n\nSet tool_choice to: auto / none / required\n\nConfigure the tool to authenticate by: Storing API keys in prompts / Using the shared project agent identity / Using a distinct agent identity bound to the client application",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Set tool_choice to:</b> required<br><b>Configure the tool to authenticate by:</b> Using a distinct agent identity bound to the client application",
      "exp": "Setting tool_choice to required forces the model to invoke a tool on every run instead of leaving that decision to the model, guaranteeing the retrieval step happens before a response is generated; auto lets the model skip tool calls entirely and none disables tool use. Configuring the tool to authenticate using a distinct agent identity bound to the client application gives the published agent its own dedicated Microsoft Entra ID identity, which is isolated from other resources in the project and whose calls can be individually audit-traced; storing API keys in prompts is an insecure anti-pattern and a shared project agent identity is not isolated to the published agent.\n\n**Learn more:** [Tool best practices for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice) · [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)"
    },
    {
      "n": 65,
      "domain": "",
      "ctx": -1,
      "q": "You are planning a Microsoft Foundry project named Project1 that will host multiple agents, and every agent will need to access the same Azure AI Search resource.  \n  \nYou need to recommend a solution that centrally manages the Azure AI Search credentials within Project1, and the solution must be applied across all the agents.  \n  \nWhat should you recommend?",
      "choices": {
        "A": "Enable role-based access control (RBAC) for the Azure AI Search resource.",
        "B": "Disable key-based access control on the Azure AI Search resource.",
        "C": "Add a connection to the Azure AI Search resource.",
        "D": "Create a managed private endpoint that connects to the Azure AI Search resource."
      },
      "answer": "C",
      "exp": "A Microsoft Foundry project connection stores an authentication detail such as an API key or endpoint once at the project level, and any agent or tool inside that project can reference the same connection instead of each agent holding a separate copy of the Azure AI Search credential. Adding a connection to the Azure AI Search resource is therefore the mechanism that centralizes credential storage and management and makes it reusable across every agent in Project1. Enabling RBAC and disabling key-based access are good complementary hardening steps but do not by themselves centralize credential management, and a managed private endpoint addresses network-level connectivity to the resource, not how agents obtain or share the credential.\n\n**Learn more:** [Add a new connection to your project - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/connections-add)"
    },
    {
      "n": 66,
      "domain": "",
      "ctx": -1,
      "q": "Contoso needs the marketing department to be able to generate videos using the model deployed to Project2. Complete the Python code shown by selecting the correct method for each dropdown.\n\n create / download_content / list / retrieve\n\n create / download_content / list / retrieve",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> create<br><b></b> retrieve",
      "exp": "The OpenAI/Azure OpenAI Python SDK's videos resource supports create, retrieve, list, and download_content operations. `client.videos.create(model=..., prompt=...)` submits a new asynchronous video generation job and returns a video object with an id and status. Because video generation is asynchronous, the status must be polled until it reaches a terminal state (completed, failed, or cancelled). This is done by calling `client.videos.retrieve(video.id)`, which fetches the current state of the specific video generation job by its id, allowing the loop to check `video.status` again. `list` would enumerate multiple video jobs rather than check one specific job, and `download_content` is used only after the job completes to fetch the resulting video bytes, so neither fits the polling loop.\n\n**Learn more:** [Quickstart: Generate video with Sora - Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/video-generation-quickstart) · [Sora 2 video generation overview (preview) - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/video-generation-quickstart)"
    },
    {
      "n": 67,
      "domain": "",
      "ctx": -1,
      "q": "You need to configure personalized interactions for Agent1 so that the solution satisfies the business requirements.  \n  \nWhat should you include in the solution?",
      "choices": {
        "A": "knowledge",
        "B": "memory",
        "C": "guardrails",
        "D": "tools"
      },
      "answer": "B",
      "exp": "The business requirement specifies that Agent1 must retain conversation context and recall relevant information from prior interactions to deliver a personalized experience in future conversations. This capability is provided by the agent's memory feature in Microsoft Foundry Agent Service, which allows an agent to persist state and recall details from earlier sessions with a user, enabling continuity and personalization across interactions. Knowledge sources (such as indexed product sheets) provide grounding data for answering domain questions, guardrails enforce safety and content policies, and tools enable the agent to invoke external functions or services — none of these directly address retaining and recalling conversational history for personalization.\n\n**Learn more:** [Agent memory - Azure AI Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-services/agents/concepts/memory)"
    },
    {
      "n": 68,
      "domain": "",
      "ctx": -1,
      "q": "You need to ensure that Agent1Dev Team can access Agent1. The solution must meet the security and compliance requirements.  \n  \nHow should you complete the Python code?\n\n AzureKeyCredential() / DefaultAzureCredential() / None\n\n create_version / get / get_version",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> DefaultAzureCredential()<br><b></b> get",
      "exp": "Contoso's security and compliance requirements mandate that API keys must not be used to access Foundry-deployed resources and that developers authenticate via Microsoft Entra ID. DefaultAzureCredential implements Entra ID (Azure AD) based authentication (using the developer's signed-in identity, managed identity, or other Entra-integrated credential sources) and contains no embedded key, satisfying both constraints; AzureKeyCredential relies on a static API key, which is explicitly disallowed, and None is not a valid credential for AIProjectClient.\n\nFor retrieving the existing agent named 'Agent1' so its name can be printed, the AgentsOperations.get(agent_name) method is the correct call — it retrieves an agent's definition (AgentDetails) by its unique name using only the agent_name argument, matching the single-argument call in the code. create_version() creates a new version rather than retrieving one, and get_version() requires an additional agent_version parameter, so both are incompatible with the code as written.\n\n**Learn more:** [AgentsOperations class - Azure AI Projects Python SDK](https://learn.microsoft.com/en-us/python/api/azure-ai-projects/azure.ai.projects.operations.agentsoperations?view=azure-python) · [Authenticate to Azure AI Foundry using Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/rbac-azure-ai-foundry)"
    },
    {
      "n": 69,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing a Retrieval Augmented Generation (RAG) chat solution used by customer support agents.  \n  \nYou are adding an automated pre-production evaluation step to a CI/CD pipeline named Pipeline1. The evaluation will run against a labeled test dataset containing support questions along with the expected grounding context.  \n  \nYou need to ensure that Pipeline1 fails if unsupported content or a retrieval mismatch exceeds a defined threshold, where:  \n  \n- Responses include claims that are not supported by the retrieved source content.  \n- The retrieved source content does not align with the labeled expected context.  \n  \nWhich two built-in evaluators should you use in Pipeline1? (Each correct answer presents part of the solution.)  \n  \nNote: Each correct selection is worth one point.",
      "choices": {
        "A": "Retrieval",
        "B": "Fluency",
        "C": "Coherence",
        "D": "Groundedness",
        "E": "Response Completeness"
      },
      "answer": "AD",
      "exp": "Azure AI Foundry's built-in RAG evaluators include Groundedness and Retrieval. The Groundedness evaluator measures whether a generated response's claims are fully supported by the retrieved source content, catching hallucinated or unsupported statements. The Retrieval evaluator assesses the quality and relevance of the retrieved chunks relative to the query, allowing detection of cases where retrieved content does not align with the expected labeled context. Fluency and Coherence measure the linguistic quality of the response text rather than factual grounding or retrieval accuracy, and Response Completeness measures coverage relative to a ground-truth answer rather than retrieval alignment, so these do not satisfy the stated requirements.\n\n**Learn more:** [Evaluation and monitoring metrics for generative AI - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-metrics-built-in) · [Groundedness evaluator - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/develop/evaluate-sdk)"
    },
    {
      "n": 70,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing a support-ticket triage agent built with Foundry Agent Service.  \n  \nThe agent uses a tool to classify the ticket type and set the ticket priority.  \n  \nSometimes the same support case spans multiple sessions over several days.  \n  \nYou need to persist state using a durable ID so that the agent automatically reuses the complete interaction history. The solution must retain previous user messages, tool calls, and tool outputs across turns and across sessions.  \n  \nWhich runtime component should you use?",
      "choices": {
        "A": "output item",
        "B": "agent",
        "C": "conversation",
        "D": "response"
      },
      "answer": "C",
      "exp": "The conversation object in Foundry Agent Service is the durable, server-side record—identified by a conversation ID—that stores the full interaction history, including user messages, tool calls, and tool outputs. Because it is persisted independently of any single session (stored durably, e.g., in Cosmos DB), referencing the same conversation ID in later requests, even days later, lets the agent automatically pull in and continue from the entire prior history without the caller needing to resend it. This satisfies the requirement for a durable ID that preserves full context across turns and sessions, distinguishing it from an agent (the reusable definition of instructions/tools/model), a response (a single generation turn's output), or an output item (an individual message or tool-call entry within a response).\n\n**Learn more:** [Build with agents, conversations, and responses in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components) · [Manage hosted agent sessions - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/manage-hosted-sessions)"
    },
    {
      "n": 71,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing a Retrieval Augmented Generation (RAG) solution. You need to run a pre-production evaluation using a labeled CSV dataset containing the query, context, response, and ground truth. The evaluation must measure:  \n  \n- Whether responses address the user query  \n- Whether responses are supported by the provided context  \n- Whether responses contain sensitive or proprietary information  \n  \nWhich AI quality evaluation metrics should you use?\n\nTo measure whether the responses are supported by the provided context and address the user query: Coherence and Fluency / GPT similarity and F1 score / Groundedness and Relevance / Groundedness and ROUGE score\n\nTo measure whether responses contain sensitive or proprietary information: Hateful and unfair content / Indirect attack / Protected material / Violent content",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>To measure whether the responses are supported by the provided context and address the user query:</b> Groundedness and Relevance<br><b>To measure whether responses contain sensitive or proprietary information:</b> Protected material",
      "exp": "In Azure AI Foundry (formerly Azure AI Studio) evaluation SDK, the Groundedness metric measures whether a response is factually consistent with and supported by the provided context, while the Relevance metric measures how well the response addresses the user's query. Together these directly satisfy the requirement to check both context support and query relevance. For detecting sensitive or proprietary content, the Protected material evaluator/metric checks generated content against known copyrighted or proprietary text, songs, or other protected material. The other options (Hateful and unfair content, Indirect attack, Violent content) are content-safety risk evaluators unrelated to proprietary/copyrighted material detection, and Coherence/Fluency, GPT similarity/F1 score, and ROUGE score measure linguistic quality or similarity to ground truth rather than context grounding or query relevance.\n\n**Learn more:** [Evaluation and monitoring metrics for generative AI - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-metrics-built-in) · [Groundedness and Relevance evaluators - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/develop/evaluate-sdk)"
    },
    {
      "n": 72,
      "domain": "",
      "ctx": -1,
      "q": "You are configuring an evaluation in Microsoft Foundry for a Retrieval Augmented Generation (RAG) chat application.  \n  \nYou need to obtain scores for the following:  \n  \n- Groundedness  \n- Relevance  \n- Harmful content categories  \n  \nWhich two evaluation categories should you use, where each correct answer represents a complete solution? (Choose two.)",
      "choices": {
        "A": "risk and safety metrics",
        "B": "fluency evaluator",
        "C": "similarity evaluators",
        "D": "AI quality (NLP) metrics",
        "E": "AI quality (AI assisted) metrics"
      },
      "answer": "AE",
      "exp": "Groundedness and relevance are AI-assisted quality metrics in Microsoft Foundry — they require a model to judge outputs against retrieved context and the user query, so they belong to the 'AI quality (AI assisted) metrics' category (unlike 'AI quality (NLP) metrics,' which covers traditional statistical NLP metrics that don't include groundedness or relevance). Harmful content categories, such as hateful and unfair content, sexual content, violent content, and self-harm-related content, are evaluated through the 'risk and safety metrics' category. Together, these two categories provide the required groundedness, relevance, and harmful content scores for a RAG chat app evaluation.\n\n**Learn more:** [Observability in Generative AI - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability) · [Microsoft Foundry risk and safety evaluations Transparency Note - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/concepts/safety-evaluations-transparency-note)"
    },
    {
      "n": 73,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent. The agent uses two tools:  \n  \n- Azure AI Search, to retrieve answers from a private product documentation index.  \n- The web search tool, to retrieve public information from the internet.  \n  \nFor a specific run, you need the agent to deterministically retrieve information only from the internet.  \n  \nWhat should you set `tool_choice` to?",
      "choices": {
        "A": "{“type”: “bing_grouding”}",
        "B": "{“type”: “azure_ai-search”}",
        "C": "“auto”",
        "D": "“required”"
      },
      "answer": "A",
      "exp": "In the Foundry Agent Service, `tool_choice` is the mechanism that deterministically controls which tool an agent invokes on a given run. You can set it to \"auto\" (model decides), \"required\" (model must call some tool, but not necessarily a specific one), \"none\" (no tools called), or to a specific tool type object such as {\"type\": \"bing_grounding\"} or {\"type\": \"azure_ai_search\"} to force that exact tool to be used. To guarantee that a run retrieves information only from the internet (and not from the private Azure AI Search index), you must explicitly force the Bing/web search grounding tool by setting tool_choice to the tool-type object referencing the web search tool, rather than leaving the decision to the model (\"auto\") or only requiring some unspecified tool call (\"required\"). Forcing {\"type\": \"azure_ai_search\"} would instead guarantee use of the private documentation index, which is not the goal here.\n\n**Learn more:** [Tool best practices for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice) · [Use Grounding with Bing Search tools with the agents API - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/bing-tools)"
    },
    {
      "n": 74,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing a customer support agent that is built on a deployed chat model.  \n  \nThe agent's responses are validated by an automated testing system that compares the generated answers against stored expected outputs. Identical prompts must produce consistent responses so that the automated tests do not fail.  \n  \nYou need to reduce the variability of the model's responses, without changing the prompt or reducing factual accuracy.  \n  \nWhat should you do for the model?",
      "choices": {
        "A": "Increase the max_tokens parameter.",
        "B": "Remove stop sequences from the requests.",
        "C": "Decrease the temperature parameter.",
        "D": "Increase the temperature parameter."
      },
      "answer": "C",
      "exp": "The temperature parameter controls how much randomness is introduced when the model samples the next token: higher values increase diversity and unpredictability of output, while lower values make the model favor the most probable tokens, producing more deterministic and repeatable responses for the same input prompt. Lowering (decreasing) the temperature therefore reduces response variability across repeated calls with identical prompts, satisfying the automated testing requirement, without requiring any change to the prompt text and without degrading factual accuracy—in fact, low temperature settings are commonly recommended for accuracy-sensitive, deterministic use cases such as RAG and conversational Q&A validation. Changing max_tokens only affects response length limits, and removing stop sequences only affects where generation is cut off; neither controls sampling randomness.\n\n**Learn more:** [How to use the reproducible output feature in Azure OpenAI (temperature/top_p guidance)](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/reproducible-output) · [Reducing randomness of responses in turbo model - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/1439994/reducing-randomness-of-responses-in-turbo-model)"
    },
    {
      "n": 75,
      "domain": "",
      "ctx": -1,
      "q": "You are developing prompts for a Microsoft Foundry project that classifies incoming support tickets by category.  \n  \nYou need to improve accuracy by showing the model examples of correct classifications, without retraining the model or storing knowledge permanently.  \n  \nWhich prompt engineering approach should you use?",
      "choices": {
        "A": "Retrieval Augmented Generation (RAG)",
        "B": "zero-shot learning",
        "C": "chain of thought",
        "D": "few-shot learning"
      },
      "answer": "D",
      "exp": "Few-shot learning involves embedding a small number of example input-output pairs directly within the prompt so the model can infer the desired pattern for the current task, without any model retraining or external knowledge storage. This directly satisfies the requirement of demonstrating correct classifications in-context while keeping the model and its weights unchanged and without persisting data outside the prompt. Zero-shot learning provides no examples, chain-of-thought focuses on eliciting step-by-step reasoning rather than demonstrating labeled examples, and RAG relies on retrieving and injecting external stored knowledge at query time, which conflicts with the 'no permanent knowledge storage' requirement.\n\n**Learn more:** [Prompt engineering techniques - Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)"
    },
    {
      "n": 76,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent used for a customer support chat application. The agent uses a memory store together with a memory search tool.  \n  \nYou need to make sure the conversation history does **not** persist across separate sessions.  \n  \nWhat should you set as the scope of the memory tool?",
      "choices": {
        "A": "session",
        "B": "{{$conversationId}}",
        "C": "{{$userId}}",
        "D": "global"
      },
      "answer": "B",
      "exp": "In Foundry Agent Service, the memory tool's `scope` parameter determines which pool of stored memory items a given request can read from and write to. Setting scope to the dynamic {{$conversationId}} variable ties memory items to the unique ID of the current conversation/thread, so each new session (which gets a new conversation ID) cannot see memory captured in a different, earlier conversation. In contrast, scoping to {{$userId}} intentionally keeps the same identity key across sessions so memory persists and personalizes future sessions for that user — the opposite of the requirement — while a static 'session' or 'global' value would create one shared, non-varying bucket used by all calls rather than isolating memory per individual session.\n\n**Learn more:** [What is Memory? - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory) · [Create and use memory in Foundry Agent Service (preview) - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/memory-usage)"
    },
    {
      "n": 77,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent.  \n  \nYou need to enable long-term memory so that the agent can recall user preferences across separate conversations. Stored memories must be isolated per authenticated user, and the client application must not have to manually generate user IDs.  \n  \nHow should you complete the Python code? Each value may be used once, more than once, or not at all.\n\nItems:\n- \"session\"\n- \"{{$conversationId}}\"\n- \"{{$userId}}\"\n- [mem_store_name]\n- [memory_tool]\n- MemorySearchTool(\"support_mem_store\")",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> &quot;{{$userId}}&quot;<br><b></b> [memory_tool]",
      "exp": "The scope parameter of MemorySearchTool defines the isolation boundary for stored memories. To persist and recall user preferences across separate conversations, the scope must be tied to the user identity rather than the session or conversation. The dynamic token \"{{$userId}}\" automatically resolves to the authenticated user's ID from the calling context, so memories are isolated per user without requiring the client application to generate or supply user IDs manually. In contrast, \"session\" or \"{{$conversationId}}\" scope memories to a single conversation, which would not allow recall across separate conversations. The tools parameter of PromptAgentDefinition must reference the already-configured memory_tool instance (passed as [memory_tool]) so the agent uses the MemorySearchTool object with the correct memory_store_name and scope already set, rather than instantiating a new, differently configured tool.\n\n**Learn more:** [Azure AI Foundry Agent Service - Memory (preview)](https://learn.microsoft.com/en-us/azure/ai-services/agents/how-to/tools/memory)"
    },
    {
      "n": 78,
      "domain": "",
      "ctx": -1,
      "q": "You have a web app named App1 that integrates with a Microsoft Foundry project named Project1 to process user prompts. App1 performs the following actions:  \n  \n- Sends prompts directly to a model by using the Azure OpenAI Responses API  \n- Invokes the Azure AI Content Safety tool by using a Foundry connection within the same request  \n  \nYou need to configure end-to-end visibility into each step of the request workflow.  \n  \nWhat should you do?",
      "choices": {
        "A": "Enable logging by using the client SDK for Content Safety.",
        "B": "Enable logging by using Foundry Local.",
        "C": "Enable application tracing in Project1.",
        "D": "Route requests through the Azure OpenAI endpoint."
      },
      "answer": "C",
      "exp": "Microsoft Foundry provides built-in application/agent tracing based on OpenTelemetry that captures every step of a request as correlated spans — including both the model invocation via the Responses API and any tool calls made through Foundry connections, such as Azure AI Content Safety. When application tracing is enabled in the project (typically by connecting an Application Insights resource), Foundry automatically instruments and correlates these steps into a single end-to-end trace that can be viewed in the Foundry portal's Traces view, giving visibility into inputs, outputs, latency, and errors at each stage of the workflow. Enabling logging only within the Content Safety client SDK would isolate that single call and not correlate it with the model request, Foundry Local applies to local model execution rather than this cloud-hosted workflow, and simply routing requests through the Azure OpenAI endpoint does not by itself produce any tracing or visibility into the workflow steps.\n\n**Learn more:** [Set Up Tracing for AI Agents in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-setup) · [Agent tracing in Microsoft Foundry (preview) - Concepts](https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept)"
    },
    {
      "n": 79,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent named Agent1.  \n  \nThe agent runs successfully, but the Foundry Control Plane does not show values for:  \n  \n- Error rates  \n- Runs  \n- Token usage  \n  \nAdditionally, the Traces tab is empty.  \n  \nYou need to ensure that the Foundry Control Plane displays the appropriate values for Agent1.  \n  \nWhat should you do?",
      "choices": {
        "A": "Update Agent1 to a new version.",
        "B": "Restart Agent from Foundry Control Plan",
        "C": "Assign to a Log Analytics workspace to Agent1.",
        "D": "Enable Application Insights for Agent1."
      },
      "answer": "D",
      "exp": "Foundry Control Plane's monitoring dashboards and Traces tab depend on OpenTelemetry data sent to an Azure Monitor Application Insights resource connected to the agent's hosting resource. Without Application Insights enabled, agents lack health metrics, cost/token tracking, and drill-down traces, which explains the missing error rate, runs, token usage, and empty Traces tab. Enabling and connecting Application Insights for Agent1 allows this telemetry (operation names, durations, model calls, tool invocations, token usage) to populate Control Plane views within minutes of agent execution.\n\n**Learn more:** [Monitor agents with the Agent Monitoring Dashboard - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard) · [Monitor AI agent fleet health and performance - Microsoft Foundry Control Plane](https://learn.microsoft.com/en-us/azure/foundry/control-plane/monitoring-across-fleet)"
    },
    {
      "n": 80,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent.  \n  \nThe agent uses Azure Content Understanding in Foundry Tools to process vendor onboarding packets. The packets include digital PDFs that contain tables and hyperlinks.  \n  \nThe extracted content is indexed for search and provided to a downstream agent in Markdown format.  \n  \nYou need to produce a Markdown output whose layout and semantic structure are optimized for Retrieval Augmented Generation (RAG) workflows.  \n  \nWhich built-in analyzer should you use?",
      "choices": {
        "A": "prebuilt-documentFieldSchema",
        "B": "prebuilt-documentSearch",
        "C": "prebuilt-read",
        "D": "prebuilt-layout"
      },
      "answer": "B",
      "exp": "Azure Content Understanding provides a dedicated category of RAG analyzers that extract content with layout represented as markdown and apply semantic analysis to improve retrieval quality for downstream applications. Within this category, prebuilt-documentSearch extracts paragraphs, tables, and figures; generates detailed figure/chart/diagram descriptions; captures handwritten annotations; and produces a document summary, and it is the analyzer Microsoft explicitly recommends for document ingestion in RAG workflows. The other options do not meet this requirement: prebuilt-layout and prebuilt-read are content extraction analyzers focused on OCR and raw layout/structure extraction rather than RAG-optimized semantic markdown, and prebuilt-documentFieldSchema is a utility analyzer used to propose field schemas, not to generate RAG-ready markdown.\n\n**Learn more:** [Azure Content Understanding in Foundry Tools prebuilt analyzers](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/prebuilt-analyzers) · [What is Azure Content Understanding in Foundry Tools?](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)"
    },
    {
      "n": 81,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent. The agent uses Azure AI Search for Retrieval Augmented Generation (RAG).  \n  \nYou plan to ingest and index PDF product manuals.  \n  \nYou need to design a solution that supports semantic similarity matching, ensuring the agent retrieves relevant data even when user questions are phrased differently than the wording used in the product manuals.  \n  \nWhich indexing approach should you use?",
      "choices": {
        "A": "vector search",
        "B": "semantic ranking",
        "C": "suggesters",
        "D": "analyzers"
      },
      "answer": "A",
      "exp": "Vector search in Azure AI Search indexes content as high-dimensional embeddings that capture semantic meaning rather than exact text. This allows queries phrased differently from the source documents to still match relevant content based on conceptual/semantic similarity, which is essential for RAG scenarios where user questions may not use the same terminology as the underlying product manuals. Semantic ranking only re-ranks results from an initial keyword or hybrid search and does not itself generate the embeddings needed for similarity matching; suggesters provide autocomplete functionality; and analyzers process text for lexical (keyword) search, not semantic understanding.\n\n**Learn more:** [Vector search in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/vector-search-overview) · [Retrieval Augmented Generation (RAG) in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)"
    },
    {
      "n": 82,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry agent that grounds its responses using an Azure Search index. The index includes:  \n  \n- Searchable text fields for product names and product codes  \n- A vector field that stores embeddings for product descriptions  \n  \nYou need to ensure that users can query the index using:  \n  \n- Exact product names or codes  \n- Natural language descriptions of the products  \n  \nWhat should you configure?",
      "choices": {
        "A": "vector search only",
        "B": "hybrid search",
        "C": "keyword search only",
        "D": "semantic search only"
      },
      "answer": "B",
      "exp": "Hybrid search in Azure AI Search combines traditional full-text (keyword) search with vector search in a single query request. This allows exact-match queries against text fields (such as product names and codes) to be resolved via keyword search, while natural language queries are resolved via vector similarity search against the embeddings field, with results merged and ranked together. Using only vector search would degrade exact-match retrieval of names/codes, and using only keyword or semantic search would not leverage the vector embeddings for natural language description matching.\n\n**Learn more:** [Hybrid search - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview)"
    },
    {
      "n": 83,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure AI Search indexer that ingests PDF policy manuals.  \n  \nClient applications must display page-level citations that include bounding polygons for both text and images.  \n  \nYou need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:  \n  \n- Provide text and image location metadata.  \n- Extract tables that span multiple pages.  \n  \nWhat should you add?",
      "choices": {
        "A": "Document Extraction",
        "B": "Azure Content Understanding in Foundry Tools",
        "C": "GenAI Prompt",
        "D": "Document Layout"
      },
      "answer": "B",
      "exp": "The Azure Content Understanding skill (Microsoft.Skills.Util.ContentUnderstandingSkill) uses Azure Content Understanding document analyzers in Foundry Tools to extract both text and images while returning locationMetadata (page numbers and bounding-polygon/source position data) for each text chunk and each normalized image, which is exactly what's needed to build page-level citations with bounding regions for both content types. Critically, Microsoft's documentation states that for tables spanning multiple pages, the Azure Content Understanding skill can recognize and extract cross-page tables as a single unit — a capability the alternative Document Layout skill lacks (it outputs tables as plain text on a per-page basis and does not merge them across pages without additional custom logic). The Document Extraction skill does not provide text location metadata (no polygon/page-number data for text), and the GenAI Prompt skill is a generative/LLM skill for producing new content (e.g., summaries or image captions), not a content-extraction skill, so neither meets the stated requirements.\n\n**Learn more:** [Azure Content Understanding Skill - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-content-understanding) · [Document Layout Skill - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-document-intelligence-layout)"
    },
    {
      "n": 84,
      "domain": "",
      "ctx": -1,
      "q": "You are building an Azure AI Search indexing pipeline named Pipeline1 that ingests invoices stored in Azure Blob Storage. The invoices are stored as scanned images.  \n  \nYou need to enable users to search invoice data across the invoice fields.  \n  \nWhich built-in skill should you add to the skillset of Pipeline1?",
      "choices": {
        "A": "Text Split",
        "B": "Text Translation",
        "C": "optical character recognition (OCR)",
        "D": "Image Analysis"
      },
      "answer": "C",
      "exp": "Because the invoices exist only as scanned images, there is no extractable text layer for the indexer to use directly. The built-in Optical Character Recognition (OCR) skill in Azure AI Search reads printed and handwritten text out of image content during the enrichment process, and that extracted text can then be projected into searchable index fields, enabling full-text search over the invoice data. Text Split only chunks already-extracted text, Text Translation converts existing text between languages, and Image Analysis produces image tags/captions/visual descriptions rather than extracting the actual textual content needed for searching invoice fields.\n\n**Learn more:** [OCR Skill - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-ocr) · [Extract Text from Images by Using AI Enrichment - Azure AI Search | Microsoft Learn](https://learn.microsoft.com/en-us/azure/search/cognitive-search-concept-image-scenarios)"
    },
    {
      "n": 85,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to analyze marketing videos.  \n  \nVideo segmentation is enabled.  \n  \nYou need to configure an analyzer to output a generated JSON field that describes the color scheme of each video segment.  \n  \nHow should you configure the analyzer? Each value may be used once, more than once, or not at all.\n\nItems:\n- classify\n- generate\n- group\n- string\n- table",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Field value type:</b> string<br><b>Field method:</b> generate",
      "exp": "In Azure Content Understanding's fieldSchema, each field defines a 'type' (value type) and a 'method' (how the value is populated). The value type 'string' is used for natural-language text output such as a description of a color scheme. The method 'generate' is used when the model must infer or interpret content rather than extract literal text or classify into a fixed enum — this is required for video analyzers since 'extract' is supported only for document analyzers. Microsoft's official video documentation explicitly cites 'Color scheme' as an example custom field used to convey mood and atmosphere in each video segment, and demonstrates comparable descriptive fields (e.g., brandLogo) configured with \"type\": \"string\" and \"method\": \"generate\". Since describing a segment's color scheme requires the generative model to interpret and synthesize a description from the visual frames rather than copy literal text or pick from a fixed category list, 'string' + 'generate' is the correct configuration.\n\n**Learn more:** [Azure Content Understanding in Foundry Tools video overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/video/overview) · [Azure Content Understanding in Foundry Tools - What is an analyzer? Configuration and reference](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference)"
    },
    {
      "n": 86,
      "domain": "",
      "ctx": -1,
      "q": "You have an invoice-processing application named App1 that uses Azure Content Understanding in Foundry Tools.  \n  \nYou are building a new Content Understanding pipeline named Pipeline1 that must meet the following requirements:  \n  \n- Compare an invoice to its related purchase order  \n- Validate the invoice against static vendor contact documents  \n- Return a single structured output that includes discrepancy findings  \n  \nYou need to configure Pipeline1 and expose the pipeline as a single analyzer endpoint. What should you configure?",
      "choices": {
        "A": "a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis.",
        "B": "a single-file task in standard mode that uses confidence scores enabled for the extracted fields.",
        "C": "a multiple-file task in pro mode that uses the vendor contract files as reference data",
        "D": "a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer"
      },
      "answer": "C",
      "exp": "Azure Content Understanding Pro mode is specifically designed for advanced use cases requiring multi-step reasoning and complex decision-making, such as identifying inconsistencies between documents. Pro mode is enabled by configuring a multi-file task, which supports multiple input documents (the invoice and purchase order) and lets you supply reference data (the vendor contract/contact documents) at analyzer creation time. The service then applies reasoning to validate the input documents against the reference data according to a defined schema, flagging discrepancies for review, and returns this as a single structured output through one analyzer endpoint. Standard mode only supports single-file tasks and does not support multiple input document processing, reference dataset integration, or multi-step reasoning, so it cannot fulfill the comparison and validation requirements.\n\n**Learn more:** [Azure Content Understanding in Foundry Tools standard and pro modes (preview)](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/standard-pro-modes) · [Create an Azure AI Content Understanding multi-file task in the Azure AI Foundry portal](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/quickstart/use-ai-foundry-pro-mode)"
    },
    {
      "n": 87,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that is used to generate short promotional product videos.  \n  \nAfter several clips have been approved, reviewers notice a small watermark in the top-right corner of some of the videos.  \n  \nYou need to remove the watermark without regenerating the videos.  \n  \nWhat should you do?",
      "choices": {
        "A": "Modify the original prompt to exclude watermarks.",
        "B": "Crop the video by using the size parameter.",
        "C": "Increase the guidance scale.",
        "D": "Apply a mask-based inpainting edit to the affected part of the video."
      },
      "answer": "D",
      "exp": "Azure AI Foundry's Sora 2 video generation feature supports video-to-video inpainting, where you supply a mask over the specific region of an existing, already-generated video (such as the watermark area) and the model edits only that masked region. This targeted approach preserves the rest of the approved video content and avoids the need to regenerate the entire clip, unlike changing the prompt, adjusting the guidance scale (both of which require a new generation run), or cropping (which alters the frame/composition rather than surgically removing the artifact).\n\n**Learn more:** [Video generation with Sora 2 (preview) - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation) · [Sora 2 video generation overview (preview) - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/video-generation-quickstart)"
    },
    {
      "n": 88,
      "domain": "",
      "ctx": -1,
      "q": "You have a web app named App1 that sends requests to a multimodal chat model deployment in a Microsoft Foundry project.  \n  \nUser messages can contain both text and images.  \n  \nCurrently, App1 embeds the image URL as plain text within the message content, so the model cannot recognize it as an image.  \n  \nTraces show that the requests contain a single text message rather than a multimodal content array.  \n  \nYou need to send the message as a structured array that includes both the text portion and the image reference, so that the model can process the image correctly.  \n  \nWhat should you do?",
      "choices": {
        "A": "Set the user message content array to include items that have type: text and type: image_url.",
        "B": "Encode the image to base64 and include the encoded data inside the content string of the user message.",
        "C": "Add the image URL to the request metadata section, so the model can resolve the processing issue automatically.",
        "D": "Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization."
      },
      "answer": "A",
      "exp": "Microsoft Foundry (Azure OpenAI) chat completion models that support vision expect the user message's 'content' field to be an array of content-part objects rather than a plain string when the message includes both text and images. Each element in the array must specify a 'type': one element with type 'text' containing the text field, and another with type 'image_url' containing an 'image_url' object with the image's URL (or base64 data URI). This structured format allows the model to distinguish text from image references and process the image correctly, as documented in Microsoft's guidance on using image and audio input in chat completions with Foundry Models.\n\n**Learn more:** [How to use image and audio in chat completions with Azure AI Foundry Models - Azure AI Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/model-inference/how-to/use-chat-multi-modal) · [How to use vision-enabled chat models - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/gpt-with-vision)"
    },
    {
      "n": 89,
      "domain": "",
      "ctx": -1,
      "q": "You are developing a customer support web application called App1 in Microsoft Foundry that uses a GPT realtime model.  \n  \nApp1 must support:  \n  \n- Live, low-latency voice conversations powered by Azure OpenAI  \n- Streaming audio input from users, along with playback of audio responses  \n  \nYou need to select a connection method that supports real-time audio streaming within the client application and achieves approximately 100 ms of latency.  \n  \nWhich connection method should you choose?",
      "choices": {
        "A": "RTMP",
        "B": "WebRTC",
        "C": "SIP",
        "D": "WebSocket"
      },
      "answer": "B",
      "exp": "WebRTC is purpose-built for peer-to-peer, real-time audio (and video) communication and is the connection method Microsoft recommends for client-side applications—such as browser-based or mobile apps—that use the Azure OpenAI GPT Realtime API to stream microphone audio to the model and play back generated speech with minimal delay, typically achieving round-trip latencies around 100 ms. WebSocket, while supported by the Realtime API, is intended for server-to-server integrations where strict low latency is not required, since it introduces higher end-to-end delay than WebRTC. SIP is intended for telephony/PSTN call integration rather than in-browser or in-app client streaming, and RTMP is not a supported protocol for the Realtime API at all.\n\n**Learn more:** [Use the GPT Realtime API via WebRTC - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/realtime-audio-webrtc) · [Use the GPT Realtime API via WebSockets - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/realtime-audio-websockets)"
    },
    {
      "n": 90,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that includes an agent and is connected to a GitHub repository. The repository contains a YAML file named File1 that defines the agent's evaluation settings.  \n  \nYou need to create a GitHub Actions workflow that runs the evaluation defined in File1 whenever a pull request (PR) is opened.  \n  \nHow should you configure the workflow?",
      "choices": {
        "A": "Set project-endpoint to the endpoint of the project.",
        "B": "Set evaluation-config to the path of the YAML file.",
        "C": "Set model-deployment-name to the deployed model.",
        "D": "Set tenant-id to the Microsoft Entra tenant ID"
      },
      "answer": "B",
      "exp": "The GitHub Actions integration for Microsoft Foundry evaluations runs an evaluation based on a YAML configuration file that specifies the evaluators, dataset, and target to use. To have the workflow execute the specific evaluation defined in File1, the workflow must set the evaluation-config input to the path of that YAML file so the action knows which evaluation definition to load and run when the PR trigger fires."
    },
    {
      "n": 91,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent.  \n  \nThe agent uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless-credentials requirement.  \n  \nYou need to ensure that the agent can retrieve the secrets. The solution must follow the principle of least privilege.  \n  \nWhat should you configure?\n\nManaged identity scope: Enable a system-assigned managed identity at the Foundry level. / Enable a system-assigned managed identity at the project level. / Create a service principal and store the principal's client secret.\n\nKey Vault authorization method: Add an API key to application settings. / Add a Key Vault access policy for the secrets. / Assign the Key Vault Secrets User role to the managed identity.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Managed identity scope:</b> Enable a system-assigned managed identity at the project level.<br><b>Key Vault authorization method:</b> Assign the Key Vault Secrets User role to the managed identity.",
      "exp": "A system-assigned managed identity eliminates the need for stored credentials such as access keys, satisfying the keyless-credentials requirement. Scoping the managed identity to the project (rather than the whole Foundry resource) keeps the identity's permissions and blast radius as narrow as possible, which aligns with least privilege. For Key Vault access, Azure RBAC is the modern, recommended authorization model over the legacy access-policy model; the built-in 'Key Vault Secrets User' role grants only the ability to read (get/list) secret contents, without granting rights to manage the vault or other object types, making it the least-privileged role assignment needed for the agent's managed identity to retrieve secrets.\n\n**Learn more:** [Agent identity concepts in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/agent-identity) · [Provide access to Key Vault keys, certificates, and secrets with an Azure role-based access control](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide)"
    },
    {
      "n": 92,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains a customer support application.\n\nYou create an evaluation named Run1 with the following configuration:\n- Includes risk and safety metrics\n- Includes the protected material evaluation\n- Includes harmful content metrics that use a medium severity threshold\n\nYou create an evaluation named Run2 with the following configuration:\n- Includes risk and safety metrics\n- Includes the protected material evaluation\n- Includes harmful content metrics that use a high severity threshold\n\nYou run both evaluations against a dataset named DB1 and get the following results:\n- Content harm defect rate of Run1: 12%\n- Content harm defect rate of Run2: 4%\n- Protected material evaluation of Run1: 6%\n- Protected material evaluation of Run2: 6%\n\nYou start a fine-tuning job using DB1. The job fails during the automatic RAI checks for multiple content harm types. You discover that the content filtering configuration is set to high severity.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- Changing the content filtering configuration to low severity will resolve the fine-tuning job issues.\n- The difference between the 12% and 4% content harm defect rate is consistent with the different severity thresholds used in Run1 and Run2.\n- The identical 6% protected material evaluation values across Run1 and Run2 indicate that this metric is unaffected by the change in the severity threshold.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>Changing the content filtering configuration to low severity will resolve the fine-tuning job issues. — <b>No</b><br>The difference between the 12% and 4% content harm defect rate is consistent with the different severity thresholds used in Run1 and Run2. — <b>Yes</b><br>The identical 6% protected material evaluation values across Run1 and Run2 indicate that this metric is unaffected by the change in the severity threshold. — <b>Yes</b>",
      "exp": "A content filtering/severity threshold set to 'High' is the most permissive configuration — it blocks only the most severe (high-severity) content, while a 'Low' threshold is the strictest, blocking content at low, medium, and high severity levels. Because the fine-tuning job already fails RAI checks while the filter is at the permissive 'High' setting, the training data contains content severe enough to trigger blocking even under minimal filtering; switching to 'Low' would only make filtering stricter (catching more content), so it would not resolve — and would likely worsen — the failures. Additionally, per Microsoft's fine-tuning safety evaluation documentation, the RAI checks performed during fine-tuning use predefined thresholds that are not tied to any custom content filtering configuration, so changing a filter configuration doesn't affect this evaluation at all.\n\nContent harm defect rate is defined as the percentage of dataset responses whose severity score exceeds the configured threshold. A medium threshold (used in Run1) is more sensitive and flags content at medium and high severity, resulting in a higher defect rate (12%); a high threshold (used in Run2) only flags the most severe content, resulting in a lower defect rate (4%). This drop is exactly the expected behavior when moving from a stricter to a more lenient threshold, confirming the difference is consistent with the threshold change.\n\nThe protected material evaluator is a binary classifier that detects the presence of copyrighted text (e.g., song lyrics, articles) in model output; it operates independently of the configurable severity scale used for harmful content categories (hate, sexual, violence, self-harm). Because the severity threshold setting has no bearing on protected material detection, it is expected that Run1 and Run2 — which differ only in harmful content severity threshold — produce the same protected material evaluation result (6% in both).\n\n**Learn more:** [Safety evaluation for fine-tuning (preview) - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/fine-tuning-safety-evaluation) · [Content filtering for Microsoft Foundry Models (classic)](https://learn.microsoft.com/en-us/azure/foundry-classic/foundry-models/concepts/content-filter)"
    },
    {
      "n": 93,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains a multi-agent solution. The agents use tool calling to query internal systems.  \n  \nYou need to implement responsible AI auditing to meet the following requirements:  \n  \n- Capture all the nested operations across the entire agent run.  \n- Record tool invocation arguments and returned results as metadata.  \n  \nWhat should you use for each requirement? Each option may be used once, more than once, or not at all.\n\nItems:\n- Hierarchical spans\n- A KQL query filter\n- Sampling\n- Tool call attributes\n- Trace sampling policy",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Capture all the nested operations across the entire agent run:</b> Hierarchical spans<br><b>Record tool invocation arguments and results:</b> Tool call attributes",
      "exp": "In Microsoft Foundry's OpenTelemetry-based agent tracing, a trace consists of spans that can be nested as parent/child spans, forming a hierarchical tree that reflects the full call stack of an agent run — including sub-agent calls and tool invocations. This hierarchical span structure is what allows capture of all nested operations across an entire agent run, and is rendered as a hierarchical trajectory/tree in the Foundry portal's Observability > Traces view. Separately, each tool-call span carries attributes (metadata) that record the tool's invocation arguments and returned results, following OpenTelemetry semantic conventions for tool calls, which makes this data queryable and auditable. KQL query filters and sampling/trace sampling policies relate to querying stored telemetry or controlling which traces are collected, not to the structural capture of nested operations or the recording of tool call inputs/outputs.\n\n**Learn more:** [Agent tracing in Microsoft Foundry (preview) - Concepts](https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept) · [Configure tracing for AI agent frameworks - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-framework)"
    },
    {
      "n": 94,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads, and it calls an Azure OpenAI model deployment.  \n  \nDuring load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error. Some user uploads fail and generate an HTTP 400 file size exceeded error.  \n  \nYou need to mitigate the errors and reduce call failures. The solution must remain within the service and model limits.  \n  \nWhat should you do to resolve each error? Drag the appropriate actions to the correct errors. Each action may be used once, more than once, or not at all.\n\nItems:\n- Increase tenant-wide quotas.\n- Move large content to files and use file search.\n- Use additional agent tools to reduce the message size.\n- Implement exponential backoff and jitter in the retry logic.\n- Split content into smaller files before uploading the files.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>HTTP 429:</b> Implement exponential backoff and jitter in the retry logic.<br><b>HTTP 400:</b> Split content into smaller files before uploading the files.",
      "exp": "Microsoft Foundry Agent Service documentation explicitly defines a limit error reference table: a 429 rate_limit_exceeded error from a model deployment is mitigated by implementing exponential backoff with jitter in the client's retry logic, which spaces out retries to let throttling recover without exceeding the tokens-per-minute/requests-per-minute quota. A 400 file_size_exceeded error from file uploads is mitigated by splitting the content into smaller files (or reducing file size) before uploading, since the per-file size limit is a fixed service limit that cannot be increased. Both remedies work within the existing service and model limits, as required, rather than requesting new quota (which is scoped to the subscription/deployment, not tenant-wide, and is a separate action from reducing failures within current limits).\n\n**Learn more:** [Quotas and limits for Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions) · [Azure OpenAI in Microsoft Foundry Models Quotas and Limits](https://learn.microsoft.com/en-us/azure/foundry/openai/quotas-limits)"
    },
    {
      "n": 95,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project.  \n  \nYou need to deploy a model from the model catalog to support a search solution for internal policy documents. The model must generate vector representations of the text in the documents and of user queries.  \n  \nWhich type of model should you use?",
      "choices": {
        "A": "an embedding model",
        "B": "an image generation model",
        "C": "a large language model (LLM)",
        "D": "a small language model (SLM)"
      },
      "answer": "A",
      "exp": "An embedding model is designed to convert text (documents and queries) into numerical vector representations that capture semantic meaning. These vectors enable similarity-based search, such as vector search or retrieval-augmented generation (RAG), by allowing the system to compare the vector of a user query against the vectors of indexed documents to find the most relevant matches. The Azure AI Foundry (Microsoft Foundry) model catalog includes embedding models such as text-embedding-ada-002 and other embedding models specifically for this purpose, distinct from LLMs or SLMs which are optimized for text generation rather than producing embeddings.\n\n**Learn more:** [Embeddings - Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/understand-embeddings) · [Model catalog and collections in Azure AI Foundry portal](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/model-catalog-overview)"
    },
    {
      "n": 96,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project.  \n  \nYou need to deploy a model from the model catalog to support real-time inference. The solution must meet the following requirements:  \n  \n- Use key-based authentication.  \n- Support real-time REST API access.  \n- Must NOT consume the vCPU quota of the virtual machines in the Azure subscription.  \n  \nWhich type of deployment should you use?",
      "choices": {
        "A": "serverless API",
        "B": "batch",
        "C": "self-hosted container",
        "D": "standard"
      },
      "answer": "A",
      "exp": "Serverless API (Models-as-a-Service) deployments in Azure AI Foundry are hosted and billed on a pay-as-you-go basis by Microsoft rather than being provisioned onto dedicated VM instances in the customer's subscription, so they do not draw from the subscription's vCPU quota. They expose a real-time REST API endpoint and are authenticated using an API key (key-based authentication), satisfying all stated requirements. In contrast, standard (managed compute) and self-hosted container deployments provision dedicated VM instances that consume subscription vCPU quota, and batch deployments are designed for asynchronous/offline processing rather than real-time REST calls.\n\n**Learn more:** [Deploy models as serverless API deployments - Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/deploy-models-serverless) · [Overview: Deploy models, flows, and web apps with Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/deployments-overview)"
    },
    {
      "n": 97,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project. You need to create a customer support agent that meets the following requirements:  \n  \n- Grounds responses only in company policy documents stored in curated repositories  \n- Retains customer preferences across separate chat sessions  \n  \nHow should you configure the agent? Select the appropriate options in the answer area.\n\nKnowledge grounding: Configure retrieval from approved data sources. / Upload the policy documents direct to the agent. / Embed the policy documents directly into the agent instructions.\n\nMemory: Use orchestration-managed session context. / Enable agent memory that uses persistent storage. / Retain user preferences in the state of the client application",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Knowledge grounding:</b> Configure retrieval from approved data sources.<br><b>Memory:</b> Enable agent memory that uses persistent storage.",
      "exp": "For grounding, Microsoft Foundry agents should be configured to retrieve knowledge only from approved, curated data sources (such as a knowledge base or index built from vetted repositories) rather than uploading files directly to the agent or embedding content into instructions, both of which bypass repository-level governance and curation controls. For memory, the Microsoft Foundry Agent Service supports agent memory backed by persistent storage (e.g., Cosmos DB-backed memory stores), which allows customer preferences and context to be retained across separate chat sessions. Orchestration-managed session context only persists for the life of a single session/thread, and storing preferences in client application state ties retention to that client rather than the agent, so neither meets the cross-session retention requirement.\n\n**Learn more:** [Overview of Memory - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/concepts/what-is-memory) · [Create and Use Memory - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/memory-usage)"
    },
    {
      "n": 98,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent that generates summaries from retrieved policy documents.  \n  \nYou need to improve the completeness of the agent's responses. The solution must be implemented in the application code logic, and it must take effect before responses are returned to the caller.  \n  \nWhat should you do?",
      "choices": {
        "A": "Add a retry evaluation before the responses are returned.",
        "B": "Decrease the value of the temperature parameter.",
        "C": "Increase the value of the presence_penalty parameter",
        "D": "Replace the model with a smaller deployment."
      },
      "answer": "A",
      "exp": "Microsoft Foundry provides built-in response-quality evaluators (including a completeness/answer-completeness metric) that can be called from application code to assess a generated response before it is returned to the user. By adding a retry-evaluation step in the app logic—evaluating the draft response for completeness and triggering a retry (regeneration or additional retrieval) when it fails the threshold—the application enforces completeness at runtime, prior to returning the final response. This differs from adjusting model sampling parameters (temperature, presence_penalty) or swapping to a smaller model, none of which are code-level pre-return quality gates and none of which reliably guarantee response completeness.\n\n**Learn more:** [Agent Evaluators for Generative AI - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators) · [Evaluate your AI agents - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/evaluate-agent)"
    },
    {
      "n": 99,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription.  \n  \nYou are planning to build an application that will use the Azure AI DALL-E model.  \n  \nYou need to deploy the model.  \n  \nWhat should you use?",
      "choices": {
        "A": "the Azure SDK for Python and PowerShell cmdlets.",
        "B": "the Azure SDK for JavaScript and Azure Machine Learning Studio.",
        "C": "Microsoft Foundry and the Azure Command Line Interface (CLI)",
        "D": "the Azure portal and Microsoft Graph API"
      },
      "answer": "C",
      "exp": "Deploying an Azure OpenAI model such as DALL-E requires creating a model deployment inside an Azure OpenAI/Azure AI resource. Microsoft Foundry (the current portal experience for Azure AI/Azure OpenAI resources) is the primary interface for creating and deploying such models, and the Azure CLI (using the cognitiveservices extension, e.g., `az cognitiveservices account deployment create`) provides a supported command-line/automation method for creating those deployments. This combination is documented in Microsoft's official guidance on deploying models in Microsoft Foundry, whereas the other tool combinations listed (Azure ML Studio, Microsoft Graph API, or the Python/PowerShell SDK/cmdlet pairing) are not the supported mechanism for deploying Azure OpenAI's DALL-E model.\n\n**Learn more:** [Deploy models using Azure CLI and Bicep - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/create-model-deployments) · [How to Use Image Generation Models from OpenAI - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/dall-e)"
    },
    {
      "n": 100,
      "domain": "",
      "ctx": -1,
      "q": "You are developing a test method to verify results retrieved from a call to the Azure Vision in Foundry Tools API. The call is used to analyze the existence of company logos in images, and it returns a collection of brands named brands. You have the following code segment:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785303416283-1vw0fjnu.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- The code will display the name of each detected brand with a confidence equal to or higher than 75 percent.\n- The code will display coordinates for the top-left corner of the rectangle that contains the brand logo of the displayed brands.\n- The code will display coordinates for the bottom-right corner of the rectangle that contains the brand logo of the displayed brands.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>The code will display the name of each detected brand with a confidence equal to or higher than 75 percent. — <b>Yes</b><br>The code will display coordinates for the top-left corner of the rectangle that contains the brand logo of the displayed brands. — <b>Yes</b><br>The code will display coordinates for the bottom-right corner of the rectangle that contains the brand logo of the displayed brands. — <b>No</b>",
      "exp": "In the Azure Vision (Image Analysis) brand detection response, each detected brand object includes a name, a confidence score, and a rectangle object with properties x, y, w, and h. The x and y values represent the coordinates of the top-left corner of the bounding box around the logo, while w and h represent the width and height of that box — they do not represent the coordinates of the bottom-right corner. To compute the bottom-right corner, one would need to calculate x + w and y + h, which the code segment does not do; it only prints rectangle.w and rectangle.h directly. Therefore the code correctly displays each detected brand's name when confidence is at least 0.75, and correctly displays the top-left corner coordinates (x, y), but does not display the bottom-right corner coordinates.\n\n**Learn more:** [Brand detection - Azure Vision in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-brand-detection)"
    },
    {
      "n": 101,
      "domain": "",
      "ctx": -1,
      "q": "You are creating a Microsoft Foundry project named Project1 that will contain an agent and use an Azure key vault named KV1. You need to configure a connection from Project1 to KV1. How should you complete the Bicep code?  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785303415876-cm82wv7p.png)\n\n 'AzureAIService' / 'AzureKeyVault' / 'AzureOpenAI'\n\n 'AccountKey' / 'AccountManagedIdentity' / 'ApiKey'",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> &#x27;AzureKeyVault&#x27;<br><b></b> &#x27;AccountManagedIdentity&#x27;",
      "exp": "To connect a Microsoft Foundry (Azure AI Foundry) resource or project to a customer-owned Azure Key Vault using Bicep, the Microsoft.CognitiveServices/accounts/connections resource must specify category: 'AzureKeyVault', which tells Foundry this connection targets a Key Vault rather than an AI service or Azure OpenAI resource. The authType must be set to 'AccountManagedIdentity' so that the Foundry resource authenticates to the Key Vault using its managed identity instead of a stored key or API key; the managed identity is then granted an RBAC role (for example, Key Vault Secrets Officer) on the vault so Foundry can read and write secrets. This is the exact pattern documented by Microsoft for bringing your own Key Vault to a Foundry resource, and it also aligns with the best practice of using Microsoft Entra ID–based (managed identity) authentication rather than key-based authentication for Key Vault access.\n\n**Learn more:** [Set up an Azure Key Vault Connection - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/set-up-key-vault-connection) · [Microsoft.CognitiveServices/accounts/connections reference](https://learn.microsoft.com/en-us/azure/templates/microsoft.cognitiveservices/accounts/connections)"
    },
    {
      "n": 102,
      "domain": "",
      "ctx": -1,
      "q": "You are working on a custom named entity recognition (NER) project in Azure Language in Foundry Tools for support tickets. The project schema includes an entity type called ContactInfo.  \n  \nIn the tagged training files, ContactInfo is applied to:  \n  \n- Phone numbers  \n- Email addresses  \n- Social media handles  \n  \nWhen you evaluate the model, you observe low precision for the ContactInfo entity, including false positives where nearby text is incorrectly extracted as ContactInfo.  \n  \nYou need to improve the precision of the project.  \n  \nWhat should you do before retraining the model?",
      "choices": {
        "A": "Lower the confidence threshold for ContactInfo.",
        "B": "Trigger an auto-labeling job.",
        "C": "Add more support tickets as training data and label more ContactInfo entities.",
        "D": "Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span."
      },
      "answer": "D",
      "exp": "Azure's custom NER schema-design guidance states that you should avoid 'complex entities' — entity types that bundle together multiple distinct kinds of information with different surface patterns — because such entities are difficult for the model to pick out precisely from text, leading to boundary confusion and false positives. The documented remedy is to break the complex entity into multiple, more specific entity types so each has a narrower, more consistent pattern that requires fewer labels to learn accurately (the official example replaces a single 'Address' entity with 'Street Name,' 'PO Box,' 'City,' 'State,' and 'Zip'). In this project, ContactInfo mixes phone numbers, email addresses, and social media handles — three very different textual patterns — under one label, which is exactly the kind of complex/ambiguous entity design that causes low precision and nearby-text false positives. Replacing ContactInfo with separate Phone, Email, and SocialMedia entities and relabeling the corresponding spans in the training data addresses the root schema issue before retraining, whereas adjusting the confidence threshold, running auto-labeling, or simply adding more training data with the same flawed schema would not resolve the underlying ambiguity.\n\n**Learn more:** [Preparing data and designing a schema for custom named entity recognition (NER) - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/custom-named-entity-recognition/how-to/design-schema) · [Custom Named Entity Recognition (NER) FAQ - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/custom-named-entity-recognition/faq)"
    },
    {
      "n": 103,
      "domain": "",
      "ctx": -1,
      "q": "You are building a Python application that collects customer comments before they are posted to a public forum. You need to send a text comment to Azure AI Content Safety and return the self-harm severity value from the response. How should the code be completed?  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785303417103-i4z0h359.png)\n\n AnalyzeTextOptions(categories=comment) / AnalyzeTextOptions(text=[comment]) / AnalyzeTextOptions(text=comment) / TextCategory.SELF_HARM(comment)\n\n client.analyze_image(request) / client.analyze_text(request) / client.moderate_text(request) / client.path(\"/text:analyze\").post(request)",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> AnalyzeTextOptions(text=comment)<br><b></b> client.analyze_text(request)",
      "exp": "The Azure AI Content Safety Python SDK's AnalyzeTextOptions class requires a 'text' parameter of type str, so the request must be constructed as AnalyzeTextOptions(text=comment) — passing the raw string, not a list, and not misusing the 'categories' parameter or attempting to call TextCategory.SELF_HARM as a constructor. To submit the request, the ContentSafetyClient exposes an analyze_text(request) method (analyze_image is for images, moderate_text does not exist in this SDK, and the .path(...).post(...) syntax belongs to the JavaScript REST client, not the Python SDK). The resulting AnalyzeTextResult exposes a categories_analysis collection that is filtered for TextCategory.SELF_HARM to obtain and return its severity value, matching the pattern shown in Microsoft's official Content Safety Python quickstart.\n\n**Learn more:** [Quickstart: Analyze text content - Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-text) · [AnalyzeTextOptions Class - Python API reference](https://learn.microsoft.com/en-us/python/api/azure-ai-contentsafety/azure.ai.contentsafety.models.analyzetextoptions)"
    },
    {
      "n": 104,
      "domain": "",
      "ctx": -1,
      "q": "You are creating a text-to-speech solution using Azure Speech in Foundry Tools that reads instructions aloud from a script contained in a text file.  \n  \nYou notice that the solution frequently mispronounces technical terms.  \n  \nYou need to stop these incorrect pronunciations from occurring. The solution must minimize development effort.  \n  \nWhat should you do?",
      "choices": {
        "A": "From Speech Studio, train a custom neural voice",
        "B": "Use Speech Synthesis Markup Language (SSML) to specify phonemes.",
        "C": "Use Speech Synthesis Markup Language (SSML) to apply say as rules.",
        "D": "Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice.",
        "E": "From Azure OpenAI use the Whisper model."
      },
      "answer": "B",
      "exp": "The SSML phoneme element allows you to specify the exact pronunciation of a word using a phonetic alphabet such as IPA or SAPI. This directly addresses mispronunciation of specific technical terms with minimal effort, since you only need to annotate the problematic words in the SSML markup rather than retrain a model. In contrast, say-as is meant for interpreting content types (like dates or numbers) rather than correcting phonetic pronunciation, prosody adjusts pitch/rate/volume rather than pronunciation, custom neural voice training requires substantial data collection and model training effort, and Whisper is a speech-to-text model, not applicable to a text-to-speech pronunciation issue.\n\n**Learn more:** [Pronunciation with Speech Synthesis Markup Language (SSML) - Speech service - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-pronunciation) · [Phonetic sets for Speech Synthesis Markup Language (SSML) - Microsoft Learn](https://github.com/MicrosoftDocs/azure-ai-docs/blob/main/articles/ai-services/speech-service/speech-ssml-phonetic-sets.md)"
    },
    {
      "n": 105,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription. You need to create a new resource that will generate fictional stories in response to user prompts. The solution must ensure that the resource uses a customer-managed key to protect data.  \n  \nHow should you complete the script?  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785303417191-ibxgjlsc.png)\n\n AIServices / LanguageAuthoring / OpenAI\n\n --api-properties / --assign-identity / --encryption",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> OpenAI<br><b></b> --encryption",
      "exp": "Generating fictional stories from prompts is a generative AI task performed by Azure OpenAI Service, so the Cognitive Services resource must be created with --kind OpenAI. To protect the resource's data with a customer-managed key, the az cognitiveservices account create command uses the --encryption parameter, which accepts a JSON payload specifying keySource as Microsoft.KeyVault along with keyVaultProperties (keyName, keyVersion, keyVaultUri) — exactly the structure shown in the script. --assign-identity only grants the resource a managed identity (needed to access Key Vault) but does not configure encryption itself, and --api-properties is unrelated to encryption configuration.\n\n**Learn more:** [az cognitiveservices account create](https://learn.microsoft.com/en-us/cli/azure/cognitiveservices/account?view=azure-cli-latest#az-cognitiveservices-account-create) · [Configure customer-managed keys for Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/encryption/cognitive-services-encryption-keys-portal)"
    },
    {
      "n": 106,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an application that will detect faulty components produced on a factory production line. The components are specific to your business.  \n  \nYou need to use the Azure Custom Vision API to help detect common faults.  \n  \nWhich three actions should you perform in sequence? Move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n\nItems:\n- Initialize the training dataset.\n- Train the classifier model.\n- Create a project.\n- Upload and tag images.\n- Train the object detection model.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>1</b> Create a project.<br><b>2</b> Upload and tag images.<br><b>3</b> Train the classifier model.",
      "exp": "To detect faults using Azure Custom Vision, you first create a Custom Vision project, specifying the project type (Classification, since you are determining whether a component is faulty). Next, you upload representative images of components and tag them (e.g., 'faulty' or 'good') so the service has labeled training data. Finally, you train the classifier model, which uses the tagged images to learn the visual qualities that distinguish faulty from non-faulty components. Object detection training is unnecessary here because the goal is to classify the overall condition of a component, not to identify and locate multiple distinct objects or defect regions within each image.\n\n**Learn more:** [Quickstart: Build an image classification model with the Custom Vision portal](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/getting-started-build-a-classifier) · [What is Custom Vision?](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/overview)"
    },
    {
      "n": 107,
      "domain": "",
      "ctx": -1,
      "q": "You are building a new sales system that will process user-generated video and text submitted through a public-facing website.  \n  \nYou plan to notify users that their data has been processed by the sales system.  \n  \nWhich responsible AI principle does this help satisfy?",
      "choices": {
        "A": "fairness",
        "B": "transparency",
        "C": "inclusiveness",
        "D": "reliability and safety"
      },
      "answer": "B",
      "exp": "Transparency is one of Microsoft's six Responsible AI principles (fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability). It requires that organizations be open about how data is collected, used, and stored, and that people understand how AI systems process their information and reach decisions. Notifying users that their data has been processed satisfies this requirement for transparency about data collection and use, helping build user trust and enabling informed choices about how their data is handled.\n\n**Learn more:** [What is Responsible AI - Azure Machine Learning | Microsoft Learn](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2) · [Responsible AI Principles and Approach | Microsoft AI](https://www.microsoft.com/en-us/ai/principles-and-approach)"
    },
    {
      "n": 108,
      "domain": "",
      "ctx": -1,
      "q": "You are designing a content management system.  \n  \nYou need to ensure that the reading experience is optimized for users who have reduced comprehension and learning differences, such as dyslexia. The solution must minimize development effort.  \n  \nWhich Azure service should you include in the solution?",
      "choices": {
        "A": "Azure Document Intelligence in Foundry Tools",
        "B": "Azure Language in Foundry Tools",
        "C": "Azure AI Immersive Reader",
        "D": "Azure Translator in Foundry Tools"
      },
      "answer": "C",
      "exp": "Azure AI Immersive Reader is specifically designed to improve reading comprehension for people with learning differences such as dyslexia, as well as for new readers and language learners. It provides built-in, proven accessibility features—text-to-speech read-aloud, syllabification, parts-of-speech highlighting, line focus, adjustable spacing/fonts, and a picture dictionary—through a ready-to-use client library and UI, which can be embedded into an application with minimal custom development. This distinguishes it from Document Intelligence (document data extraction), Language (general NLP tasks like sentiment/key phrase analysis), and Translator (language translation), none of which target reading comprehension accessibility.\n\n**Learn more:** [What is Azure AI Immersive Reader? - Azure AI services | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/immersive-reader/overview) · [Azure AI Immersive Reader | Microsoft Azure](https://azure.microsoft.com/en-us/products/ai-services/ai-immersive-reader)"
    },
    {
      "n": 109,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription that contains an Azure App Service app named App1.  \n  \nYou provision a Microsoft Foundry Service resource named CSAccount1.  \n  \nYou need to configure App1 to access CSAccount1, using a solution that minimizes administrative effort.  \n  \nWhat should you use to configure App1?",
      "choices": {
        "A": "the endpoint URI and subscription key",
        "B": "the endpoint URI and an OAuth token",
        "C": "the endpoint URI and a shared access signature (SAS) token",
        "D": "a system assigned managed identity and an X.509 certificate"
      },
      "answer": "D",
      "exp": "A system-assigned managed identity provides App1 with an automatically created and managed identity in Microsoft Entra ID. Behind the scenes, Azure issues and automatically rotates an X.509 certificate as the credential for this identity, so no keys, tokens, or secrets need to be manually created, stored, or rotated by an administrator. After enabling the managed identity, you simply assign App1's identity an appropriate RBAC role (such as Cognitive Services User) on CSAccount1, and the app authenticates using Microsoft Entra ID tokens obtained transparently through this managed credential. This keyless approach requires the least ongoing administrative effort compared to manually managing a subscription key, OAuth token, or SAS token.\n\n**Learn more:** [Managed identities for Azure resources - overview](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview) · [How to use managed identities for App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/overview-managed-identity)"
    },
    {
      "n": 110,
      "domain": "",
      "ctx": -1,
      "q": "You have a web app that uses Azure AI Search.  \n  \nWhile reviewing activity, you notice greater than expected search query volumes and suspect that the query key has been compromised.  \n  \nYou need to prevent unauthorized access to the search endpoint while ensuring that users retain read-only access to the documents collection. The solution must minimize app downtime.  \n  \nWhich three actions should you perform, in sequence? Move the appropriate actions from the list into the answer area and arrange them in the correct order.\n\nItems:\n- Regenerate the primary admin key\n- Regenerate the secondary admin key\n- Change the app to use the secondary admin key\n- Add a new query key\n- Change the app to use the new key\n- Delete the compromised key",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>1</b> Add a new query key<br><b>2</b> Change the app to use the new key<br><b>3</b> Delete the compromised key",
      "exp": "Azure AI Search query keys (unlike admin keys) cannot be regenerated in place — there is no primary/secondary rotation mechanism for them. To replace a suspected compromised query key without causing downtime, you first provision a new query key, update the application configuration to use that new key so the app continues functioning, and finally delete the compromised key to revoke its access. Query keys are inherently read-only, so this approach satisfies the requirement that users retain read-only access to the documents collection while eliminating the exposed key.\n\n**Learn more:** [Create and manage api keys - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-security-api-keys)"
    },
    {
      "n": 111,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing two agents, named PolicyWriter and RskReviewer.  \n  \nPolicyWriter produces draft updates for customer policies, and RiskReviewer reviews those drafts.  \n  \nIn the visual builder, create a workflow that meets these requirements:  \n  \n- Finalize low-risk updates without manual intervention.  \n- Ensure predictable execution between the agents.  \n- Require user approval for high-risk updates.  \n  \nWhat should you configure?\n\nOrchestration pattern: The sequential template that passes outputs node by-node / The group chat template to dynamically route control between the agents / The human-in-the-loop template that pauses execution of the workflow for input\n\nApproval checkpoints: Add a Basic chat node. / Add a Condition statement. / Add an Ask a question node.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Orchestration pattern:</b> The sequential template that passes outputs node by-node<br><b>Approval checkpoints:</b> Add an Ask a question node.",
      "exp": "A sequential Foundry workflow passes each agent’s result to the next in a defined order, making the PolicyWriter-to-RiskReviewer process predictable. An Ask a question node waits for user input, so it can serve as the approval checkpoint for high-risk updates while low-risk updates proceed automatically.\n\n**Learn more:** [Build a workflow in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)"
    },
    {
      "n": 112,
      "domain": "",
      "ctx": -1,
      "q": "You have a Python application that redacts sensitive information before sending prompt text to a language model. The application contains the following code:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785303422561-llcsxkxd.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- For sample_text, audit will include entity records for Contact and SSN.\n- For sample_text, text_for_model will include john.doe@contoso.com and 859-98-0987.\n- For sample_text, text_for_model will contain entity type masks for John Doe and 312-555-1234.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>For sample_text, audit will include entity records for Contact and SSN. — <b>No</b><br>For sample_text, text_for_model will include john.doe@contoso.com and 859-98-0987. — <b>Yes</b><br>For sample_text, text_for_model will contain entity type masks for John Doe and 312-555-1234. — <b>Yes</b>",
      "exp": "The piiCategories parameter in the Azure AI Language PII detection request limits which entity categories are detected and returned by the service — here only \"Person\" and \"PhoneNumber\". Entities outside those categories, such as Social Security Numbers or email addresses, are not detected at all, so they never appear in doc[\"entities\"] (meaning audit won't include SSN records, and 'Contact' isn't a PII entity to begin with) and they are never redacted in redactedText (so the email and SSN remain visible in text_for_model). Conversely, detected entities within the specified categories — the person name 'John Doe' and phone number '312-555-1234' — are redacted according to the entityMask redactionPolicy, which replaces the entity text with a token denoting its entity type (e.g., [PERSON_1], [PHONENUMBER_1]) in the redactedText output.\n\n**Learn more:** [Identify and extract Personally Identifiable Information (PII) from text - Azure AI Language](https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/how-to/redact-text-pii) · [What is the Personally Identifiable Information (PII) detection feature in Azure Language?](https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/overview)"
    },
    {
      "n": 113,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an application that will use Azure AI Search for internal documents.  \n  \nYou need to implement document-level filtering for Azure AI Search.  \n  \nWhich three actions should you include in the solution? Each correct answer presents part of the solution.  \n  \n(Choose three.)",
      "choices": {
        "A": "Add allowed groups to each index entry",
        "B": "Create one index per group.",
        "C": "Send access tokens from Microsoft Entra ID, with the search request.",
        "D": "Retrieve all the groups.",
        "E": "Retrieve the group memberships of the user",
        "F": "Supply the groups as a filter for the search requests"
      },
      "answer": "AEF",
      "exp": "Azure AI Search does not provide built-in row-level or document-level security, so filtering must be implemented manually using the security filter pattern documented by Microsoft. This pattern requires: adding a filterable field to each index document that lists the group IDs (or user IDs) allowed to view that document; retrieving the group memberships of the requesting user (e.g., via Microsoft Graph or a token claim) at query time; and supplying those group IDs as an OData filter expression on the search request (such as group_ids/any(g:search.in(g, 'group_id1,group_id2'))) so that only documents matching the user's group memberships are returned in the results.\n\n**Learn more:** [Security filters for trimming results - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-security-trimming-for-azure-search) · [Security trimming example using Microsoft Entra ID - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-security-trimming-for-azure-search-with-aad)"
    },
    {
      "n": 114,
      "domain": "",
      "ctx": -1,
      "q": "You need to create a new resource that will be used to perform sentiment analysis and optical character recognition (OCR). The solution must meet the following requirements:  \n  \n- Use a single key and endpoint to access multiple services.  \n- Consolidate billing for future services that you might use.  \n- Support the use of Azure Vision in Foundry Tools in the future.  \n  \nHow should you complete the HTTP request to create the new resource?\n\n PATCH / POST / PUT\n\n CognitiveServices / ComputerVision / TextAnalytics",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> PUT<br><b></b> CognitiveServices",
      "exp": "Creating or replacing an Azure resource via the Azure Resource Manager REST API is done with the PUT verb targeting the resource's URI. To satisfy the requirement of using one key and endpoint for multiple AI services (Text Analytics for sentiment analysis and Computer Vision for OCR), with consolidated billing and future support for Azure AI Vision within Azure AI Foundry, the account must be provisioned as a multi-service Cognitive Services resource, specified by \"kind\": \"CognitiveServices\". The single-service kinds \"ComputerVision\" and \"TextAnalytics\" only expose one service each and would not meet the multi-service, single key/endpoint requirement.\n\n**Learn more:** [Create a Cognitive Services resource - Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/multi-service-resource) · [Accounts - Create - REST API (Azure Cognitive Services)](https://learn.microsoft.com/en-us/rest/api/aiservices/accountmanagement/accounts/create)"
    },
    {
      "n": 115,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure AI Search indexer that ingests PDF policy manuals.  \n  \nClient applications must display page-level citations that include bounding polygons for both text and images.  \n  \nYou need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:  \n  \n- Provide text and image location metadata.  \n- Extract tables that span multiple pages.  \n  \nWhat should you add?",
      "choices": {
        "A": "Document Layout",
        "B": "Document Extraction",
        "C": "Azure Content Understanding",
        "D": "GenAI Prompt"
      },
      "answer": "C",
      "exp": "The Azure Content Understanding skill (Microsoft.Skills.Util.ContentUnderstandingSkill) extracts text and images and, when extractionOptions includes \"images\" and \"locationMetadata\", returns location metadata (page range and positional polygon data) for both text chunks and images, which supports page-level citations. It can also recognize tables that span multiple pages and extract each cross-page table as a single unit. The Document Layout skill also returns location metadata but outputs tables as plain text and does not offer cross-page table handling; Document Extraction provides no location metadata; GenAI Prompt is for generative enrichment, not structural extraction.\n\n**Learn more:** [Azure Content Understanding Skill - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-content-understanding) · [Document Layout Skill - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-document-intelligence-layout)"
    },
    {
      "n": 116,
      "domain": "",
      "ctx": -1,
      "q": "You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains unstructured JSON data and the text from scanned PDF documents.  \n  \nWhich projection type should you use for each data type?\n\nJSON data: File projection / Object projection / Table projection\n\nExtracted text data: File projection / Object projection / Table projection",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>JSON data:</b> Object projection<br><b>Extracted text data:</b> File projection",
      "exp": "Azure AI Search knowledge stores support three projection types, each mapping to a specific Azure Storage destination and data shape. Table projections write to Azure Table Storage and require a schematized shape of rows and columns, which is best suited to structured, tabular enrichment output. Object projections write JSON documents to Azure Blob Storage and are used when you need the full JSON representation of an enrichment tree or whole document — this makes Object projection the correct choice for unstructured JSON data, since it preserves the JSON structure without forcing it into a rigid table schema. File projections also write to Azure Blob Storage but are specifically used to persist the binary content extracted/normalized from source documents (such as normalized images and the text/content derived from scanned PDF documents processed through OCR), making File projection the correct choice for the extracted text data originating from the scanned PDFs. This distinction — Table for tabular data, Object for whole-document JSON, File for extracted/normalized binary content from source documents — is documented in the Azure AI Search knowledge store projections concepts.\n\n**Learn more:** [Knowledge store \"projections\" in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/knowledge-store-projection-overview) · [Define Projections - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/knowledge-store-projections-examples)"
    },
    {
      "n": 117,
      "domain": "",
      "ctx": -1,
      "q": "You are building a model to detect objects in images. The performance of the model based on training data is shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785304946291-8i612741.png)  \n  \nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n\nThe percentage of false positives is: 0 / 25 / 30 / 50 / 100\n\nThe value for the number of true positives divided by the total number of true positives and false negatives is: 0 / 25 / 30 / 50 / 100",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>The percentage of false positives is:</b> 0<br><b>The value for the number of true positives divided by the total number of true positives and false negatives is:</b> 25",
      "exp": "Precision is defined as TP/(TP+FP). The exhibit shows Precision = 100.0%, which is only possible when FP = 0, so the percentage of false positives is 0%. Recall is defined as TP/(TP+FN), and the exhibit shows Recall = 25.0%, matching exactly the described ratio of true positives divided by the total of true positives and false negatives.\n\n**Learn more:** [Evaluate and improve a model - Custom Vision](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/getting-started-improving-your-classifier)"
    },
    {
      "n": 118,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project for a support ticket triage app that reads ticket text from a database.  \n  \nYou need to ensure that the app meets the following requirements:  \n  \n- Compares candidate models by quality, cost, and throughput  \n- Prevents hosting model weights in the Azure subscription  \n  \nWhat should you configure?\n\nModel evaluation: Configure private endpoint access. / Use deployment lists and license tabs. / Use tool catalog connections and run traces. / Use model catalog leaderboards and model cards.\n\nDeployment option: Bring your own model. / Build a vector index. / Use a serverless deployment. / Use a managed compute deployment.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Model evaluation:</b> Use model catalog leaderboards and model cards.<br><b>Deployment option:</b> Use a serverless deployment.",
      "exp": "Microsoft Foundry model leaderboards benchmark models by quality, cost, and throughput, enabling candidate-model comparison. Serverless deployments provide API access to models hosted and managed by Microsoft, rather than deploying model weights to compute in the Azure subscription.\n\n**Learn more:** [Model benchmarks and leaderboards in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks) · [Microsoft Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)"
    },
    {
      "n": 119,
      "domain": "",
      "ctx": -1,
      "q": "HOTSPOT  \n  \nYou have a collection of press releases saved as PDF files.  \n  \nYou need to extract text from the files and perform sentiment analysis.  \n  \nWhich service should you use for each task?\n\nExtract text: Azure AI Search / Azure Vision in Foundry Tools / Azure Document Intelligence in Foundry Tools\n\nPerform sentiment analysis: Azure AI Search / Azure AI Computer Vision / Azure Document Intelligence in Foundry Tools / Azure Language in Foundry Tools",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Extract text:</b> Azure Document Intelligence in Foundry Tools<br><b>Perform sentiment analysis:</b> Azure Language in Foundry Tools",
      "exp": "Azure Document Intelligence extracts text from PDF documents through its document analysis and OCR capabilities. Azure Language provides sentiment analysis for text, identifying positive, negative, neutral, and mixed sentiment.\n\n**Learn more:** [Azure AI Document Intelligence documentation](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/) · [Sentiment analysis and opinion mining](https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview)"
    },
    {
      "n": 120,
      "domain": "",
      "ctx": -1,
      "q": "You are creating a Custom Vision model to deploy as part of an iOS app.  \n  \nYou have cat and dog images, and each image contains either a cat or a dog.  \n  \nYou need to use Azure Custom Vision to determine whether an image shows a cat or a dog.  \n  \nHow should you configure the project in the Azure Custom Vision portal?\n\nProject Types: Classification / Object Detection\n\nClassification Types: Multiclass (Single tag per image) / Multilabel (Multiple tags per image)\n\nDomains: Adult / Food / General / General (compact) / Landmarks / Landmarks (compact) / Retail / Retail (compact)",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Project Types:</b> Classification<br><b>Classification Types:</b> Multiclass (Single tag per image)<br><b>Domains:</b> General (compact)",
      "exp": "Classification assigns a label to an entire image, which fits images containing exactly one cat or one dog. A multiclass classifier is appropriate when each image has exactly one tag. The compact General domain is intended for export to mobile and edge devices, which supports deployment in an iOS app.\n\n**Learn more:** [Microsoft Learn: Build a classifier with Custom Vision](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/getting-started-build-a-classifier) · [Microsoft Learn: Custom Vision domains](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/select-domain)"
    },
    {
      "n": 121,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an Azure solution that will use Azure Language in Foundry Tools to process sensitive customer data.  \n  \nYou must ensure that only specified Azure processes can access the Language service while minimizing administrative effort.  \n  \nWhat should you include in the solution?",
      "choices": {
        "A": "Azure Application Gateway",
        "B": "a virtual network gateway",
        "C": "IPsec rules",
        "D": "virtual network rules"
      },
      "answer": "D",
      "exp": "Foundry Tools network rules can block access by default and permit only traffic originating from allowed Azure virtual-network subnets. Virtual network rules therefore restrict Azure Language service access to the specified Azure workloads without managing individual IPsec configurations.\n\n**Learn more:** [Configure Foundry Tools virtual networks](https://learn.microsoft.com/en-us/azure/ai-services/cognitive-services-virtual-networks)"
    },
    {
      "n": 122,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that includes an agent. The agent has a Model Context Protocol (MCP) tool named `kbsearch` that queries a knowledge base stored in Azure AI Search.  \n  \nSome agent runs produce answers from the base model without calling the knowledge base, resulting in responses that lack grounded citations.  \n  \nYou are given the following code snippet used to run the agent.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1786767511858-jnet4i48.png)  \n  \nYou need to deterministically require the agent to invoke `kbsearch` on every run.  \n  \nWhat should you do?",
      "choices": {
        "A": "Add the response_format parameter to the create_and_process() method call.",
        "B": "Replace create_and_process() method with the create_thread_and_process_run() method.",
        "C": "Add the toolset parameter to the create_and_process() method call.",
        "D": "Add the tool_choice parameter to the create_and_process() method call."
      },
      "answer": "D",
      "exp": "`tool_choice` is the deterministic run-level control for requiring a specific tool call. Setting it in `create_and_process()` to select `kbsearch` prevents the default automatic model decision from bypassing the knowledge-base tool, so responses are grounded in its results.\n\n**Learn more:** [What are tools in Foundry Agent Service (classic)](https://learn.microsoft.com/en-za/azure/ai-foundry/agents/how-to/tools/overview?view=foundry-classic)"
    },
    {
      "n": 123,
      "domain": "",
      "ctx": -1,
      "q": "HOTSPOT  \n  \nYou run the following command.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1786767512062-v1ye8uok.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- Going to http://localhost:5000/status will query the Azure endpoint to verify whether the API key used to start the container is valid.\n- The container logging provider will write log data.\n- Going to http://localhost:5000/swagger will provide the details to access the documentation for the available endpoints.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>Going to http://localhost:5000/status will query the Azure endpoint to verify whether the API key used to start the container is valid. — <b>No</b><br>The container logging provider will write log data. — <b>No</b><br>Going to http://localhost:5000/swagger will provide the details to access the documentation for the available endpoints. — <b>Yes</b>",
      "exp": "GET /status validates the startup API key without making an endpoint query, so the first statement is false. No logging provider or output mount is configured; disk logging requires both configuration and an output mount, so the second statement is false. The /swagger endpoint provides documentation for the container endpoints, so the third statement is true.\n\n**Learn more:** [Install and run Docker containers for Sentiment Analysis - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/how-to/use-containers) · [Configure containers - Language service - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/concepts/configure-containers)"
    },
    {
      "n": 124,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an app that will give users definitions of common AI terms.  \n  \nYou create the following Python code.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1786767513061-wlqjq4bh.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- The response will contain an explanation of large language models (LLMs) that has a high degree of certainty.\n- Changing \"What is an LLM?\" to \"What is an LLM in the context of AI models?\" will produce the intended response.\n- Changing \"You are a helpful assistant.\" to \"You must answer only within the context of AI language models.\" will give a higher likelihood of producing the intended response.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>The response will contain an explanation of large language models (LLMs) that has a high degree of certainty. — <b>No</b><br>Changing &quot;What is an LLM?&quot; to &quot;What is an LLM in the context of AI models?&quot; will produce the intended response. — <b>Yes</b><br>Changing &quot;You are a helpful assistant.&quot; to &quot;You must answer only within the context of AI language models.&quot; will give a higher likelihood of producing the intended response. — <b>Yes</b>",
      "exp": "Language-model output is probabilistic, so a broad prompt cannot ensure a certain explanation. Making the user prompt more specific supplies clearer context, while a system message that limits the answer’s domain steers the model toward the intended subject and increases the likelihood of the desired response.\n\n**Learn more:** [System message design for Azure OpenAI](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering)"
    },
    {
      "n": 125,
      "domain": "",
      "ctx": -1,
      "q": "You are creating a text-processing solution.  \n  \nYou have the following function.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1786767512878-y41gmb38.png)  \n  \nYou invoke the function, using the following string as its second argument.  \n  \nOur tour of London included a visit to Buckingham Palace  \n  \nWhat is the function's output?",
      "choices": {
        "A": "London and Buckingham Palace only",
        "B": "Tour and visit only",
        "C": "Our tour of London included a visit to Buckingham Palace",
        "D": "London and Tour only"
      },
      "answer": "A",
      "exp": "Azure Text Analytics Named Entity Recognition returns recognized entities from the document, and iterating through `response.entities` prints each entity’s `text`. London is recognized as a location, and Buckingham Palace as a named location/landmark, so those two entity texts are printed. [Microsoft Learn: Use the NER client library](https://learn.microsoft.com/en-us/azure/ai-services/language-service/named-entity-recognition/quickstart)\n\n**Learn more:** [Microsoft Learn: Use the NER client library](https://learn.microsoft.com/en-us/azure/ai-services/language-service/named-entity-recognition/quickstart) · [Microsoft Learn: Azure Text Analytics client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/ai-textanalytics-readme?view=azure-python)"
    },
    {
      "n": 126,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription.  \n  \nYou need to create an app that compares documents for semantic similarity. The solution must satisfy these requirements:  \n  \n- Return numeric vectors representing the tokens in each document.  \n- Minimize development effort.  \n  \nWhich Azure OpenAI model should you use?",
      "choices": {
        "A": "GPT-3.5",
        "B": "embeddings",
        "C": "GPT-4",
        "D": "DALL-E"
      },
      "answer": "B",
      "exp": "Azure OpenAI embedding models produce numeric vector representations of text, and the distance or cosine similarity between those vectors correlates with the semantic similarity of the source documents. This provides the required document-comparison capability without building a custom representation model.\n\n**Learn more:** [Understand embeddings in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/concepts/understand-embeddings)"
    },
    {
      "n": 127,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an app that will use the Azure Vision in Foundry Tools API to analyze an image.  \n  \nYou need to configure the request used by the app to determine whether an image is clipart or a line drawing.  \n  \nHow should you complete the request?\n\n GET / PATCH / POST\n\n description / imageType / objects / tags",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> POST<br><b></b> imageType",
      "exp": "The v3.2 Analyze Image REST operation is invoked with POST. Selecting the ImageType visual feature returns clipart and line-drawing classifications.\n\n**Learn more:** [Analyze Image - REST API (Computer Vision v3.2)](https://learn.microsoft.com/en-us/rest/api/computervision/analyze-image/analyze-image?view=rest-computervision-v3.2)"
    },
    {
      "n": 128,
      "domain": "",
      "ctx": -1,
      "q": "You are building an app that will use the Speech and Language APIs.  \n  \nYou need to provision resources for the app. The solution must ensure that each service is accessed through a single endpoint and credential.  \n  \nWhich resource type should you create?",
      "choices": {
        "A": "Azure Language in Foundry Tools",
        "B": "Microsoft Foundry service",
        "C": "Azure Speech in Foundry Tools",
        "D": "Content Safety in Foundry Control Plane"
      },
      "answer": "B",
      "exp": "A Microsoft Foundry service is a multi-service resource that includes both Language and Speech. It enables those services to use a shared endpoint and credential, unlike single-service Speech or Language resources. Microsoft lists Language and Speech among the services bundled with a Foundry resource.\n\n**Learn more:** [Create a Foundry resource](https://learn.microsoft.com/en-us/azure/ai-services/multi-service-resource?tabs=speech)"
    },
    {
      "n": 129,
      "domain": "",
      "ctx": -1,
      "q": "An Azure subscription contains a Microsoft Foundry Service resource named CSAccount1 and a virtual network named VNet1. CSAaccount1 is connected to VNet1.  \n  \nYou need to ensure that only specified resources can access CSAccount1. The solution must satisfy these requirements:  \n  \n- Prevent external access to CSAccount1.  \n- Minimize administrative effort.  \n  \nWhich two actions should you take? Each correct answer is part of the solution.  \n  \nNOTE: Each correct answer is worth one point.",
      "choices": {
        "A": "In CSAccount1, modify the virtual network settings.",
        "B": "In VNet1, create a virtual subnet.",
        "C": "In VNet1, enable a service endpoint for CSAccount1.",
        "D": "In CSAccount1, configure the Access control (IAM) settings.",
        "E": "In VNet1, modify the virtual network settings."
      },
      "answer": "AC",
      "exp": "Foundry Tools network rules can deny access by default and allow only selected virtual networks or subnets. A permitted virtual-network subnet must have the Foundry Tools (`Microsoft.CognitiveServices`) service endpoint enabled, which identifies the subnet to the service. Configuring the resource's virtual-network settings and enabling that service endpoint therefore restricts access without requiring separate identity permissions or unnecessary network changes.\n\n**Learn more:** [Configure Foundry Tools virtual networks](https://learn.microsoft.com/en-us/azure/ai-services/cognitive-services-virtual-networks)"
    },
    {
      "n": 130,
      "domain": "",
      "ctx": -1,
      "q": "You use the Azure Custom Vision service to create a classifier.  \n  \nAfter training has finished, you must evaluate the classifier.  \n  \nWhich two metrics are available to review? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct choice is worth one point.",
      "choices": {
        "A": "F-score",
        "B": "area under the curve (AUC)",
        "C": "precision",
        "D": "weighted accuracy",
        "E": "recall"
      },
      "answer": "CE",
      "exp": "Azure Custom Vision calculates and displays precision and recall for a trained image classifier. Precision measures the proportion of predicted classifications that are correct, while recall measures the proportion of actual classifications that are correctly identified.\n\n**Learn more:** [Quickstart: Build an image classification model with the Custom Vision portal](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/getting-started-build-a-classifier)"
    },
    {
      "n": 131,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an app that will contain one million scanned magazine articles. Each article will be saved as an image file.  \n  \nYou need to configure the app to extract text from those images. The solution must minimize development effort.  \n  \nWhat should you include in the solution?",
      "choices": {
        "A": "Azure Document Intelligence in Foundry Tools",
        "B": "the Read API in Azure Vision in Foundry Tools",
        "C": "Azure Vision in Foundry Tools Image Analysis",
        "D": "Azure Language in Foundry Tools"
      },
      "answer": "A",
      "exp": "Microsoft's own OCR guidance draws a direct line between the input type and the recommended service: general, in-the-wild images such as labels, street signs, and posters should use the Azure Vision Read OCR API, while digital and scanned text-heavy documents such as books, articles, and reports should use the Document Intelligence Read model, which is purpose-built and optimized for automating intelligent document processing at scale with an asynchronous API. A million scanned magazine articles is exactly the text-heavy, document-scale scenario Document Intelligence targets, and using its prebuilt Read model requires only calling a managed API rather than building custom OCR pipeline logic, which minimizes development effort compared to lower-level image APIs.\n\n**Learn more:** [OCR - Optical Character Recognition - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-ocr) · [Document Intelligence read model - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/read)"
    },
    {
      "n": 132,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an app that scans confidential documents and uses the Azure Language in Foundry Tools service to analyze their contents.  \n  \nYou provision a Microsoft Foundry Service resource.  \n  \nEnsure that the app can make requests to the Azure Language in Foundry Tools service endpoint while confidential documents remain on-premises.  \n  \nWhich three actions should you perform, in sequence?\n\nItems:\n- Pull an image from Docker Hub.\n- Run the container and specify an API key and the Endpoint URL of the Azure AI resource.\n- Provision an on-premises Kubernetes cluster that is isolated from the internet.\n- Provision an on-premises Kubernetes cluster that has internet connectivity.\n- Provision an Azure Kubernetes Service (AKS) resource.\n- Run the container and specify an App ID and Client Secret.\n- Pull an image from the Microsoft Container Registry (MCR).",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>1</b> Provision an on-premises Kubernetes cluster that has internet connectivity.<br><b>2</b> Pull an image from the Microsoft Container Registry (MCR).<br><b>3</b> Run the container and specify an API key and the Endpoint URL of the Azure AI resource.",
      "exp": "Azure AI Language containers analyze content locally, so confidential documents remain on-premises. A connected container needs outbound connectivity to report billing to Azure, its image is pulled from Microsoft Container Registry, and it must be started with the Azure AI resource endpoint and API key.\n\n**Learn more:** [Use language detection Docker containers on-premises - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/language-detection/how-to/use-containers) · [Configure containers - Language service - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/concepts/configure-containers)"
    },
    {
      "n": 133,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure OpenAI model called AI1.  \n  \nYou are developing a web app named App1 by using the Azure OpenAI SDK.  \n  \nYou need to configure App1 to connect to AI1.  \n  \nWhich information must you provide?",
      "choices": {
        "A": "the deployment name, key, and model name",
        "B": "the endpoint, key, and model type",
        "C": "the deployment name, endpoint, and key",
        "D": "the endpoint, key, and model name"
      },
      "answer": "C",
      "exp": "An Azure OpenAI SDK client needs the Azure OpenAI resource endpoint and an API key for API-key authentication. Requests must also specify the Azure OpenAI deployment name; the SDK uses that deployment name as the model identifier, rather than the underlying model name or model type.\n\n**Learn more:** [How to use vision-enabled chat models - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/gpt-v-quickstart?pivots=rest-api&source=recommendations&tabs=image%2Ccommand-line)"
    },
    {
      "n": 134,
      "domain": "",
      "ctx": -1,
      "q": "You are designing an Azure AI solution to detect defective products on a production line.  \n  \nYou have a real-time video feed and an image library of sample products that were manually approved or rejected.  \n  \nYou need to recommend a service that fulfills the following requirements:  \n  \n- Monitors the video feed and detects defective products.  \n- Can train a new model by using the image library.  \n- Minimizes development effort.  \n  \nWhat should you recommend?",
      "choices": {
        "A": "Azure Vision in Foundry Tools",
        "B": "Azure AI Video Indexer",
        "C": "Azure AI Custom Vision",
        "D": "Azure Machine Learning"
      },
      "answer": "C",
      "exp": "Azure AI Custom Vision supports training custom image-classification and object-detection models from labeled images, then deploying the trained model for prediction. A production-line video feed can be evaluated by submitting frames to that custom model, while the managed training and prediction service minimizes implementation effort compared with building a model in Azure Machine Learning.\n\n**Learn more:** [What is Custom Vision? - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/overview) · [Quickstart: Build an object detector with the Custom Vision website - Foundry Tools | Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/get-started-build-detector)"
    },
    {
      "n": 135,
      "domain": "",
      "ctx": -1,
      "q": "HOTSPOT  \n  \nYou are developing a solution that students will use to locate references for essays.  \n  \nUse the following code as the starting point for the solution.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1787531559190-u9sg14qy.png)  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.\n\nStatements:\n- The code will detect the language of documents.\n- The url attribute returned for each linked entity will be a Bing search link.\n- The matches attribute returned for each linked entity will provide the location in a document where the entity is referenced.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>The code will detect the language of documents. — <b>No</b><br>The url attribute returned for each linked entity will be a Bing search link. — <b>No</b><br>The matches attribute returned for each linked entity will provide the location in a document where the entity is referenced. — <b>Yes</b>",
      "exp": "Entity linking identifies and disambiguates entities and supplies a URL to a knowledge-base entry, commonly Wikipedia; it is not a document-language detection operation. A linked entity can include a Bing entity-search ID, but its `url` is the entity page URL rather than a Bing search-results link. The `matches` collection contains each occurrence of the entity, with offset and length values that locate it in the document.\n\n**Learn more:** [Entity linking quickstart — Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/entity-linking/quickstart) · [LinkedEntityMatch class — Azure SDK for Python](https://learn.microsoft.com/en-us/python/api/azure-ai-textanalytics/azure.ai.textanalytics.linkedentitymatch?view=azure-python)"
    },
    {
      "n": 136,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure AI Search resource named Search1 that multiple applications hosted in Azure use.  \n  \nYou need to secure Search1 while meeting these requirements:  \n  \n- Prevent internet access to Search1.  \n- Restrict each application so it can query only particular indexes.  \n  \nWhat should you do?\n\nTo prevent access from the internet: Configure an IP firewall. / Create a private endpoint. / Use Azure roles.\n\nTo limit access to query specific indexes: Create a private endpoint. / Use Azure roles. / Use key authentication.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>To prevent access from the internet:</b> Create a private endpoint.<br><b>To limit access to query specific indexes:</b> Use Azure roles.",
      "exp": "A private endpoint connects Azure AI Search through Private Link and enables public network access to be disabled, preventing public-internet access. Azure RBAC can assign search data roles at an individual index scope, allowing each app identity to query only its permitted indexes. API query keys grant service-level read access and do not isolate indexes.\n\n**Learn more:** [Create a Private Endpoint for a Secure Connection - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/service-create-private-endpoint) · [Connect Using Azure Roles - Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-security-rbac)"
    },
    {
      "n": 137,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project that includes an agent. The agent creates summaries from retrieved policy documents.  \n  \nYou need to improve response completeness. The solution must be implemented in the application-code logic before responses are returned.  \n  \nWhat should you do?",
      "choices": {
        "A": "Add a reflection pass before the responses are returned.",
        "B": "Enable response streaming.",
        "C": "Increase the value of the presence_penalty parameter.",
        "D": "Decrease the value of the max_tokens parameter."
      },
      "answer": "A",
      "exp": "A reflection pass adds an application-controlled review-and-revision step: it can evaluate a draft summary against the retrieved policy documents for missing material and generate a more complete final response before it is returned. Streaming changes only how partial output is delivered, while a presence penalty and a lower token limit do not provide completeness validation; lowering the token limit can truncate output.\n\n**Learn more:** [Build with agents, conversations, and responses](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components)"
    },
    {
      "n": 138,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an internet-based training solution that requires each user’s camera and microphone to stay enabled.  \n  \nYou need to monitor the user’s video stream and confirm that the user is alone and not collaborating with another user. The solution must minimize development effort.  \n  \nWhat should you include in the solution?",
      "choices": {
        "A": "content moderation in Azure AI Azure Video Indexer",
        "B": "speech-to-text in the Azure Speech in Foundry Tools",
        "C": "object detection in Azure AI Custom Vision",
        "D": "Spatial Analysis in Azure Vision in Foundry Tools"
      },
      "answer": "D",
      "exp": "Spatial Analysis in Azure Vision in Foundry Tools is intended to analyze live video streams for people in a physical space and supports person-counting operations. It can therefore detect when more than one person is present without requiring a custom object-detection model.\n\n**Learn more:** [What's new in Azure Vision in Foundry Tools?](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/whats-new) · [Analyze videos in near real time - Azure Vision in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/how-to/analyze-video)"
    },
    {
      "n": 139,
      "domain": "",
      "ctx": -1,
      "q": "You are developing a method that uses the Azure Vision in Foundry Tools client library. The method will perform optical character recognition (OCR) on images. The method contains the following code.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1789705165897-wcnd8ipp.png)  \n  \nDuring testing, you find that the call to the `get_read_result` method happens before the read operation has completed.  \n  \nYou need to stop the `get_read_result` method from continuing until the read operation is complete.  \n  \nWhich two actions should you take? Each correct answer provides part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
      "choices": {
        "A": "Add code to verify the read_result.status value.",
        "B": "Add code to verify the status of the read_operation_location value.",
        "C": "Remove the operation_id parameter.",
        "D": "Wrap the call to get_read_result within a loop that contains a delay."
      },
      "answer": "AD",
      "exp": "Azure Read OCR is asynchronous. Poll `get_read_result(operation_id)` in a loop, pausing between requests, and inspect `read_result.status` until it is no longer `notStarted` or `running` before processing the result. The `Operation-Location` value supplies the operation ID rather than reporting completion status.\n\n**Learn more:** [Quickstart: Optical character recognition (OCR) - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/quickstarts-sdk/client-library) · [Get Read Result - REST API](https://learn.microsoft.com/en-us/rest/api/computervision/get-read-result/get-read-result?view=rest-computervision-v3.1)"
    },
    {
      "n": 140,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry resource named AI1 that hosts three GPT-3.5 deployments. Each deployment is optimized for a distinct workload.  \n  \nYou plan to deploy three apps. Each app will use the REST API to access AI1 and the deployment optimized for that app’s intended workload.  \n  \nYou must give each app access to AI1 and its appropriate deployment, while ensuring that only the apps can access AI1.  \n  \nWhat should you use to provide access to AI1, and what should each app use to connect to its appropriate deployment?\n\nProvide access to AI1 by using: An API key / A bearer token / A shared access signature (SAS) token\n\nConnect to the deployment by using: An API key / A deployment endpoint / A deployment name / A deployment type",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Provide access to AI1 by using:</b> A bearer token<br><b>Connect to the deployment by using:</b> A deployment name",
      "exp": "Microsoft Entra ID bearer-token authentication supports granting the required Azure role to each app identity, so only authorized apps can access the resource. Azure OpenAI/Microsoft Foundry REST inference requests identify the target model by deployment name; the resource endpoint is shared by the deployments.\n\n**Learn more:** [Azure OpenAI image and audio REST API reference](https://learn.microsoft.com/en-us/azure/foundry/openai/reference-preview) · [Configure keyless authentication with Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/configure-entra-id)"
    },
    {
      "n": 141,
      "domain": "",
      "ctx": -1,
      "q": "You have an app that uses Azure AI Custom Vision and a custom-trained classifier to identify products in images.  \n  \nYou need to add new products to the classifier. The solution must meet these requirements:  \n  \n- Minimize the time required to add the products.  \n- Minimize development effort.  \n  \nWhich five actions should you perform, in sequence?\n\nItems:\n- From the Custom Vision portal, open the project.\n- From the Azure Machine Learning studio, open the workspace.\n- From Vision Studio, open the project.\n- Upload sample images of the new products.\n- Label the sample images.\n- Retrain the model.\n- Publish the model.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>1</b> From the Custom Vision portal, open the project.<br><b>2</b> Upload sample images of the new products.<br><b>3</b> Label the sample images.<br><b>4</b> Retrain the model.<br><b>5</b> Publish the model.",
      "exp": "Azure AI Custom Vision projects are managed in the Custom Vision portal. Adding new product classes requires uploading representative training images and assigning them tags, then training a new iteration. Publishing that iteration makes the updated classifier available to the application prediction endpoint."
    },
    {
      "n": 142,
      "domain": "",
      "ctx": -1,
      "q": "You plan to build an app that generates a list of tags for uploaded images. The app must meet these requirements:  \n  \n- Generate tags in a user’s preferred language.  \n- Support English, French, and Spanish.  \n- Minimize development effort.  \n  \nYou need to create a function that generates the tags for the app.  \n  \nWhich Azure service endpoint should you use?",
      "choices": {
        "A": "Azure Vision in Foundry Tools Image Analysis",
        "B": "Azure Custom Vision image classification",
        "C": "Content Safety in Foundry Control Plane",
        "D": "Custom Translator"
      },
      "answer": "A",
      "exp": "Azure Vision in Foundry Tools Image Analysis is a prebuilt service that generates image tags and supports localized tag output through its language parameter, including English, French, and Spanish. It avoids the custom training required by Custom Vision, while Content Safety and Custom Translator do not perform general image-tag generation.\n\n**Learn more:** [Language support for Azure Vision in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/language-support?view=form-recog-2.1.0) · [Tag Image in Stream - REST API](https://learn.microsoft.com/en-us/rest/api/computervision/tag-image-in-stream/tag-image-in-stream?view=rest-computervision-v3.2)"
    },
    {
      "n": 143,
      "domain": "",
      "ctx": -1,
      "q": "You are designing a solution to answer questions about human resources (HR) policies stored in PDF format.  \n  \nYou must ensure that the same answer to a particular question is returned every time. The solution must minimize development effort.  \n  \nWhich service should you include in the solution?",
      "choices": {
        "A": "Azure OpenAI",
        "B": "Azure Language in Foundry Tools",
        "C": "Azure Machine Learning",
        "D": "Azure Document Intelligence in Foundry Tools"
      },
      "answer": "B",
      "exp": "Azure Language custom question answering is intended for static information sources, including PDFs, and returns the same answer when different users submit the same question. Azure OpenAI chat completions are nondeterministic by default, so using them would require additional controls and development without providing the same direct guarantee.\n\n**Learn more:** [What is custom question answering?](https://learn.microsoft.com/en-us/azure/ai-services/language-service/question-answering/how-to/azure-openai-integration) · [How to generate reproducible output with Azure OpenAI](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/how-to/reproducible-output)"
    },
    {
      "n": 144,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription that includes an Azure Language in Foundry Tools service resource.  \n  \nYou need to determine the URL for the Language service REST interface.  \n  \nWhich blade should you use in the Azure portal?",
      "choices": {
        "A": "Networking",
        "B": "Identity",
        "C": "Properties",
        "D": "Keys and Endpoint"
      },
      "answer": "D",
      "exp": "The **Keys and Endpoint** blade displays the Azure Language resource endpoint, which is the base URL used to make REST API requests, along with the resource access keys.\n\n**Learn more:** [Quickstart: Use the NER client library - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/named-entity-recognition/quickstart)"
    },
    {
      "n": 145,
      "domain": "",
      "ctx": -1,
      "q": "Solution: In Content Safety Studio, you use the Safety metaprompt feature to perform the tests.  \n  \nDoes this satisfy the requirement?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "Safety metaprompts guide a model’s behavior as a complementary safety layer; they are not a mechanism for testing or optimizing content-filter configurations. Content Safety’s text-moderation testing experience evaluates sample text against configured severity thresholds and returns moderation results, which supports filter tuning.\n\n**Learn more:** [Safety system messages - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/system-message) · [Quickstart: Analyze text content - Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-text)"
    },
    {
      "n": 146,
      "domain": "",
      "ctx": -1,
      "q": "You have 100,000 images.  \n  \nYou need to build an app that performs the following actions:  \n  \n- Identify road signs in the images and extract the text on the signs.  \n- Analyze the text to identify well-known locations.  \n  \nThe solution must minimize development effort.  \n  \nWhat should you use for each action?\n\nExtract the text: Azure Document Intelligence in Foundry Tools / Azure Language in Foundry Tools / Azure AI Search / Azure Vision in Foundry Tools\n\nIdentify well-known locations: Azure Document Intelligence in Foundry Tools / Azure Language in Foundry Tools / Azure AI Search / Azure Vision in Foundry Tools",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Extract the text:</b> Azure Vision in Foundry Tools<br><b>Identify well-known locations:</b> Azure Language in Foundry Tools",
      "exp": "Azure Vision in Foundry Tools OCR extracts printed text from images such as street signs. Azure Language in Foundry Tools provides named entity recognition and entity linking to identify places and other well-known entities in text, avoiding custom OCR and location-recognition development. Azure AI Search is an indexing and retrieval service rather than the appropriate service for this entity analysis.\n\n**Learn more:** [OCR - Optical Character Recognition - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-ocr) · [What is named entity recognition (NER) in Azure Language?](https://learn.microsoft.com/en-us/azure/ai-services/language-service/named-entity-recognition/overview)"
    },
    {
      "n": 147,
      "domain": "",
      "ctx": -1,
      "q": "Solution: In Content Safety Studio, use the **Monitor online activity** feature to run the tests.  \n  \nDoes this satisfy the requirement?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "Content-filter configurations should be tested with the Content Safety Studio moderation test experience, which accepts sample text, applies configurable category thresholds, and lets the text be run again to evaluate the filter behavior. Monitoring online activity is not the feature for running sample-content configuration tests.\n\n**Learn more:** [Quickstart: Analyze text content - Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-text)"
    },
    {
      "n": 148,
      "domain": "",
      "ctx": -1,
      "q": "You operate a factory that produces cardboard packaging for food products, and the factory’s internet connectivity is intermittent.  \n  \nPackages must contain four samples of every product.  \n  \nYou need to build an Azure Custom Vision model that identifies packaging defects, provides their locations to an operator, and ensures that every package contains the four products.  \n  \nWhich project type and domain should you use? Each option may be used once, more than once, or not at all.\n\nItems:\n- Food\n- General\n- General (compact)\n- Image classification\n- Logo\n- Object detection",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Project type:</b> Object detection<br><b>Domain:</b> General (compact)",
      "exp": "Object detection is required because it returns bounding-box locations for defects and can detect multiple product instances, allowing the operator to verify that four samples are present. The General (compact) domain is appropriate when a compact, exportable model is needed for local inference during unreliable internet connectivity."
    },
    {
      "n": 149,
      "domain": "",
      "ctx": -1,
      "q": "You have an agent named Agent1 that uses Model Context Protocol (MCP) calls to retrieve external data.  \n  \nYou need to implement guardrails so that Agent1 cannot send any content tagged as Violence to the MCP server.  \n  \nWhich intervention point should be used?",
      "choices": {
        "A": "tool call",
        "B": "user input",
        "C": "tool response",
        "D": "output"
      },
      "answer": "A",
      "exp": "A tool call intervention point evaluates the action and arguments an agent is about to send to an external tool, including the data in the request. Blocking Violence-tagged content there prevents that content from being transmitted to the MCP server before the call executes.\n\n**Learn more:** [Intervention points concepts - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/guardrails/intervention-points) · [Guardrails and controls overview in Microsoft Foundry](https://learn.microsoft.com/en-in/azure/ai-foundry/guardrails/guardrails-overview?view=foundry-classic)"
    },
    {
      "n": 150,
      "domain": "",
      "ctx": -1,
      "q": "You have a configurable guardrail in a Microsoft Foundry project.  \n  \nA Python application has a text blocklist named `ConfidentialTerms` that already contains terms to detect in user messages. Each incoming user message is stored in `input_text`.  \n  \nYou plan to moderate `input_text` before sending the text to a language model.  \n  \nYou need to analyze `input_text` by using the existing blocklist.  \n  \nHow should you complete the code?\n\n AddOrUpdateTextBlocklistItemsOptions / AnalyzeImageOptions / AnalyzeTextOptions / TextBlocklist\n\n client.add_or_update_blocklist_items / client.analyze_image / client.analyze_text / client.list_text_blocklists",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> AnalyzeTextOptions<br><b></b> client.analyze_text",
      "exp": "`AnalyzeTextOptions` creates a text-moderation request and supports `blocklist_names` to supply the existing blocklist. `client.analyze_text(request)` submits that request for text analysis; image analysis and blocklist-management methods do not perform the required text moderation.\n\n**Learn more:** [AnalyzeTextOptions Class — Azure AI Content Safety Python](https://learn.microsoft.com/en-us/python/api/azure-ai-contentsafety/azure.ai.contentsafety.models.analyzetextoptions?view=azure-python) · [ContentSafetyClient Class — Azure AI Content Safety Python](https://learn.microsoft.com/en-us/python/api/azure-ai-contentsafety/azure.ai.contentsafety.contentsafetyclient?view=azure-python)"
    },
    {
      "n": 151,
      "domain": "",
      "ctx": -1,
      "q": "You have a Docker host named Host1 that contains a container base image.  \n  \nYour Azure subscription contains a custom speech-to-text model named model1.  \n  \nYou need to run model1 on Host1.  \n  \nWhich three actions should you perform, in order?\n\nItems:\n- Request approval to run the container.\n- Export model1 to Host1.\n- Configure disk logging.\n- Run the container.\n- Retrain the model.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>Step 1</b> Request approval to run the container.<br><b>Step 2</b> Export model1 to Host1.<br><b>Step 3</b> Run the container.",
      "exp": "A custom Speech-to-Text container requires approval for disconnected use. The trained custom model is then downloaded to the Docker host and supplied to the container when it starts. The model is already trained and the base image is already present, so retraining and disk logging are not required.\n\n**Learn more:** [Custom speech to text containers with Docker](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-container-cstt) · [Speech containers overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-container-overview)"
    },
    {
      "n": 152,
      "domain": "",
      "ctx": -1,
      "q": "Your Azure subscription contains a Microsoft Foundry resource.  \n  \nYou need to build an app that suggests product names from a supplied product description.  \n  \nWhich Foundry model should you use?",
      "choices": {
        "A": "Whisper",
        "B": "DALL-E",
        "C": "embeddings",
        "D": "GPT-4"
      },
      "answer": "D",
      "exp": "GPT-4 can understand a product description and generate a suitable product name as natural-language text. Embedding models produce numerical vectors for similarity tasks, DALL-E generates images, and Whisper handles speech-to-text. Microsoft Foundry documentation describes GPT-4 models as able to understand and generate natural language and code.\n\n**Learn more:** [Foundry Models sold by Azure — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure?context=%2Fazure%2Fai-foundry%2Fcontext%2Fcontext&pivots=azure-direct-others&view=foundry-classic)"
    },
    {
      "n": 153,
      "domain": "",
      "ctx": -1,
      "q": "Solution: From Content Safety Studio, you use the Protected material detection feature to perform the tests.  \n  \nDoes this satisfy the requirement?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "Protected material detection scans AI-generated output for known protected text or code, such as lyrics, articles, recipes, selected web content, or code from public repositories. It does not evaluate objectionable-content categories and their severity thresholds, which are required when optimizing harmful-content filter configurations.\n\n**Learn more:** [Azure AI Foundry content filtering](https://learn.microsoft.com/en-us/azure/ai-studio/concepts/content-filtering) · [Quickstart: Protected Material for Text](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-protected-material)"
    },
    {
      "n": 154,
      "domain": "",
      "ctx": -1,
      "q": "You plan to deploy a containerized Azure AI Language service for sentiment analysis.  \n  \nYou configure `https://contoso.cognitiveservices.azure.com` as the endpoint URI for the service.  \n  \nYou must run the container on an Azure virtual machine by using Docker.  \n  \nHow should you complete the command?\n\n http://contoso.blob.core.windows.net / http://contoso.cognitiveservices.azure.com / mcr.microsoft.com/azure-cognitive-services/textanalytics/keyphrase / mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment\n\n http://contoso.blob.core.windows.net / http://contoso.cognitiveservices.azure.com / mcr.microsoft.com/azure-cognitive-services/textanalytics/keyphrase / mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment<br><b></b> http://contoso.cognitiveservices.azure.com",
      "exp": "The Sentiment Analysis container uses the `mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment` image. Its required `Billing` argument is the endpoint URI of the Azure AI Language resource that meters container usage; the API key must correspond to that same resource.\n\n**Learn more:** [Install and run Docker containers for Sentiment Analysis - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/how-to/use-containers) · [Configure Language Docker containers - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/concepts/configure-containers)"
    },
    {
      "n": 155,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an AI solution that will use Sentiment Analysis results from surveys to calculate bonuses for customer-service staff.  \n  \nYou need to ensure that the solution complies with Microsoft responsible AI principles.  \n  \nWhat should you do?",
      "choices": {
        "A": "Add a human review and approval step before making decisions that affect the staff’s financial situation.",
        "B": "Include the Sentiment Analysis results when surveys return a low confidence score.",
        "C": "Use all the surveys, including surveys by customers who requested that their account be deleted and their data be removed.",
        "D": "Publish the raw survey data to a central location and provide the staff with access to the location."
      },
      "answer": "A",
      "exp": "Bonus determinations have a consequential financial and employment impact on staff. Such AI-supported decisions require meaningful human oversight, including review and approval before the result affects an individual. Microsoft guidance identifies human-in-the-loop checkpoints and approval for high-impact actions as responsible-AI safeguards.\n\n**Learn more:** [Responsible AI in Azure Workloads](https://learn.microsoft.com/en-us/azure/well-architected/ai/responsible-ai) · [Code of Conduct for Microsoft AI Services](https://learn.microsoft.com/sv-se/legal/ai-code-of-conduct?context=%2Fazure%2Fai-services%2Fspeech-service%2Fcontext%2Fcontext)"
    },
    {
      "n": 156,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription that contains an Azure Language in Foundry Tools service resource named ta1 and a virtual network named vnet1.  \n  \nYou need to make sure that only resources in vnet1 can access ta1.  \n  \nWhat should you configure?",
      "choices": {
        "A": "a network security group (NSG) for vnet1",
        "B": "an Azure Language in Foundry Tools service container for ta1",
        "C": "Azure Firewall for vnet1",
        "D": "the virtual network settings for ta1"
      },
      "answer": "D",
      "exp": "Azure Language in Foundry Tools restricts network access through the resource’s networking settings, where selected virtual networks and private endpoints can be configured. Allowing only vnet1 there limits access to that resource from the designated virtual network.\n\n**Learn more:** [Network isolation and Private Link - custom question answering - Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/question-answering/how-to/network-isolation)"
    },
    {
      "n": 157,
      "domain": "",
      "ctx": -1,
      "q": "You need to configure personalized interactions for Agent1 in accordance with the business requirements.  \n  \nWhat should the solution include?",
      "choices": {
        "A": "instructions",
        "B": "memory",
        "C": "tools",
        "D": "guardrails"
      },
      "answer": "B",
      "exp": "Memory retains user preferences and relevant conversation context across sessions, allowing an agent to recall information in later interactions and deliver personalized responses.\n\n**Learn more:** [What is Memory? - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory) · [Build with runtime components in Foundry Agent Service - Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components)"
    },
    {
      "n": 158,
      "domain": "",
      "ctx": -1,
      "q": "Solution: From Content Safety Studio, you use the **Moderate text content** feature to perform the tests.  \n  \nDoes this satisfy the requirement?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "A",
      "exp": "Content Safety Studio’s Moderate text content feature supports testing sample text against configurable content-filter severity thresholds and rerunning the tests to evaluate the filtering results. This enables optimization of text content-filter configurations.\n\n**Learn more:** [Quickstart: Analyze text content - Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-text)"
    },
    {
      "n": 159,
      "domain": "",
      "ctx": -1,
      "q": "In Microsoft Foundry, you use the Chat playground with the GPT-35 Turbo model. A prompt contains the following code.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1792533090388-us6rcy7v.png)  \n  \nYou need the model to generate an explanation of the code while minimizing costs. What should you do?",
      "choices": {
        "A": "Add function F (explanation) to the prompt.",
        "B": "Change the model to GPT-4-32k.",
        "C": "Add// what does function F do? to the prompt.",
        "D": "Set the temperature parameter to 1."
      },
      "answer": "C",
      "exp": "A concise natural-language instruction such as `// what does function F do?` explicitly asks GPT-35 Turbo to explain the code while retaining the lower-cost model. GPT-35 Turbo can generate natural-language and code-related responses, and adding the instruction adds only a small number of prompt tokens. Increasing temperature changes output randomness, not the requested task; changing to GPT-4-32k is unnecessary for this simple explanation and would not minimize cost.\n\n**Learn more:** [Foundry Models sold directly by Azure](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models?view=azure-node-latest) · [Using your data with Azure OpenAI in Microsoft Foundry Models (classic)](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/concepts/use-your-data)"
    },
    {
      "n": 160,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an app that will share users’ images.  \n  \nYou need to configure the app to:  \n  \n- Categorize every image as either a photograph or a drawing.  \n- Generate a caption for each image while minimizing development effort.  \n  \nWhich two services should you include?",
      "choices": {
        "A": "Image type detection in Azure Vision in Foundry Tools",
        "B": "Object detection in Azure Vision in Foundry Tools",
        "C": "Content tags in Azure Vision in Foundry Tools",
        "D": "Image classification in Azure Custom Vision",
        "E": "Image descriptions in Azure Vision in Foundry Tools"
      },
      "answer": "AE",
      "exp": "Azure Vision Image Type detects image characteristics such as whether an image is a line drawing or the likelihood that it is clip art, which supports distinguishing drawings from photographs. Azure Vision Image Descriptions generates human-readable captions, so it meets the caption requirement without building a custom solution.\n\n**Learn more:** [Image type detection - Azure Vision in Foundry Tools](https://learn.microsoft.com/ga-ie/azure/ai-services/computer-vision/concept-detecting-image-types) · [Image descriptions - Azure Vision in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-describing-images)"
    },
    {
      "n": 161,
      "domain": "",
      "ctx": -1,
      "q": "You need to use natural language processing to measure public perception of your brand on social media.  \n  \nWhich Azure service should you use?",
      "choices": {
        "A": "Azure Document Intelligence in Foundry Tools",
        "B": "Content Safety in Foundry Control Plane",
        "C": "Azure Language in Foundry Tools",
        "D": "Azure Vision in Foundry Tools"
      },
      "answer": "C",
      "exp": "Azure Language in Foundry Tools provides sentiment analysis and opinion mining, which analyze text for positive, neutral, or negative sentiment and can identify opinions about specific aspects of a brand or topic. These capabilities are designed to understand public perception from sources such as social media.\n\n**Learn more:** [What are sentiment analysis and opinion mining in Azure Language service?](https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview) · [Choose an Azure AI targeted language processing technology](https://learn.microsoft.com/en-us/azure/architecture/data-guide/ai-services/targeted-language-processing)"
    },
    {
      "n": 162,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an app that will use Azure AI to monitor workspaces for safety.  \n  \nYou need to recommend a service that meets these requirements:  \n  \n- Generates alerts when employees enter high-risk areas  \n- Monitors video feeds in real time  \n- Minimizes development effort  \n  \nWhat should you recommend?",
      "choices": {
        "A": "Azure Vision in Foundry Tools Image Analysis",
        "B": "Azure AI Video Indexer",
        "C": "Azure Vision in Foundry Tools Spatial Analysis",
        "D": "Object detection in Azure Custom Vision"
      },
      "answer": "C",
      "exp": "Azure Vision in Foundry Tools Spatial Analysis is designed to analyze live video streams and understand people’s movement in physical spaces. Its `personcrossingpolygon` operation can define a zone and raise a person-zone entry or exit event, providing the required high-risk-area alert without building and training a custom object-detection solution.\n\n**Learn more:** [What's new in Azure Vision in Foundry Tools?](https://learn.microsoft.com/en-in/azure/ai-services/computer-vision/whats-new)"
    },
    {
      "n": 163,
      "domain": "",
      "ctx": -1,
      "q": "You need to configure Agent1 to satisfy the security and compliance requirements.  \n  \nWhat should you include in the solution?",
      "choices": {
        "A": "prompt shields",
        "B": "protected material detection",
        "C": "violence content filtering",
        "D": "self-harm content filtering"
      },
      "answer": "A",
      "exp": "The Agent1 security requirements are that it must never reveal customer data even if a customer document lands in the product-sheet repository, and that it must be protected from malicious instructions hidden in the product sheets (including text embedded in images). That is an indirect (document) prompt-injection and data-exfiltration threat, which Prompt Shields addresses: document attack detection flags instructions embedded in documents, including attempts at unauthorized data exfiltration, and for agents it can scan content at the tool-response intervention point. Protected material detection only scans model output for known copyrighted text (lyrics, news, recipes, web content) or GitHub code, so it does not prevent leaking customer data or hijacking by injected instructions. Violence and self-harm filters are harm-category content filters that do not detect injected instructions or data exfiltration.\n\n**Learn more:** [Prompt Shields in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection) · [Protected material detection in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/protected-material)"
    },
    {
      "n": 164,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure DevOps pipeline named Pipeline1 that deploys an app. Pipeline1 includes a step that creates an Azure AI services account.  \n  \nYou need to add a step to Pipeline1 to identify the created Azure AI services account. The solution must minimize development effort.  \n  \nWhich Azure Command-Line Interface (CLI) command should you run?",
      "choices": {
        "A": "az cognitiveservices account network-rule",
        "B": "az cognitiveservices account show",
        "C": "az account list",
        "D": "az resource link"
      },
      "answer": "B",
      "exp": "`az cognitiveservices account show` retrieves information about an Azure AI services account using its name and resource group. It can identify the created account directly without custom development. ([learn.microsoft.com](https://learn.microsoft.com/cli/azure/cognitiveservices/account?utm_source=openai))\n\n**Learn more:** [az cognitiveservices account](https://learn.microsoft.com/cli/azure/cognitiveservices/account)"
    },
    {
      "n": 165,
      "domain": "",
      "ctx": -1,
      "q": "You successfully execute the following HTTP request.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1793461654585-nogo1tex.png)  \n  \nWhat does the request result in?",
      "choices": {
        "A": "A new query key was generated.",
        "B": "A new secondary subscription key was created.",
        "C": "A key for Azure AI Services was generated in Azure Key Vault.",
        "D": "The primary subscription key and the secondary subscription key were rotated."
      },
      "answer": "B",
      "exp": "The `regenerateKey` operation regenerates the specified Cognitive Services account key. Because `keyName` is `Key2`, it replaces the secondary resource subscription key; it does not rotate `Key1`. ([learn.microsoft.com](https://learn.microsoft.com/en-us/rest/api/aifoundry/accountmanagement/accounts/regenerate-key?view=rest-aifoundry-accountmanagement-2025-06-01&utm_source=openai))\n\n**Learn more:** [Accounts - Regenerate Key](https://learn.microsoft.com/en-us/rest/api/aifoundry/accountmanagement/accounts/regenerate-key?view=rest-aifoundry-accountmanagement-2025-06-01) · [Accounts - List Keys](https://learn.microsoft.com/en-us/rest/api/aifoundry/accountmanagement/accounts/list-keys?view=rest-aifoundry-accountmanagement-2025-06-01)"
    },
    {
      "n": 166,
      "domain": "",
      "ctx": -1,
      "q": "You are building an app that will use Azure Speech in Foundry Tools.  \n  \nYou need to ensure the app can authenticate to the service using a Microsoft Entra ID token.  \n  \nWhich two actions should you perform? Each correct answer presents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
      "choices": {
        "A": "Enable a virtual network service endpoint.",
        "B": "Assign the Cognitive Services Speech User role to the app's identity.",
        "C": "Configure a custom subdomain.",
        "D": "Create a Conditional Access policy.",
        "E": "Request an X.509 certificate."
      },
      "answer": "BC",
      "exp": "Microsoft Entra authentication for a Speech resource requires two things: a custom subdomain (the Entra token is presented to the custom-domain endpoint, https://{name}.cognitiveservices.azure.com) and an Azure RBAC role assignment (Cognitive Services Speech User or Cognitive Services Speech Contributor) for the user or application that requests the token. A virtual network service endpoint only restricts network access, a Conditional Access policy governs sign-in conditions for users, and an X.509 certificate is not part of Speech token authentication; none of these is required to authenticate with an Entra token.\n\n**Learn more:** [How to configure Microsoft Entra authentication for Speech](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-configure-azure-ad-auth) · [Custom subdomain names for Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/cognitive-services-custom-subdomains)"
    },
    {
      "n": 167,
      "domain": "",
      "ctx": -1,
      "q": "You are building an image-sharing app that will use Azure AI to prevent users from sharing sexually explicit images.  \n  \nYou need to ensure that inappropriate images are identified correctly. The solution must minimize development effort.  \n  \nWhat should you use?",
      "choices": {
        "A": "Vision Studio in Azure Vision in Foundry Tools",
        "B": "Microsoft Foundry",
        "C": "Visual Studio",
        "D": "Content Safety in Foundry Control Plane Studio"
      },
      "answer": "D",
      "exp": "Azure AI Content Safety can classify images for sexual content at multiple severity levels. Its studio lets developers test images, configure thresholds, and export sample code for integration, reducing development effort. The application can use the moderation result to prevent inappropriate images from being shared. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image?pivots=programming-language-rest&utm_source=openai))\n\n**Learn more:** [Quickstart: Analyze image content](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/quickstart-image) · [What is Azure AI Content Safety?](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview/)"
    },
    {
      "n": 168,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription with these configurations:  \n  \n- Subscription ID: 8d3591aa-96b8-4737-ad09-00f9b1ed35ad  \n- Tenant ID: 3edfe572-cb54-3ced-ae12-c5c177f39a12  \n  \nYou plan to create a resource that performs sentiment analysis and optical character recognition (OCR).  \n  \nYou need to use an HTTP request to create the resource in the subscription. The solution must use a single key and endpoint.  \n  \nHow should you complete the request?\n\n subscriptions/3edfe572-cb54-3ced-ae12-c5c177f39a12 / subscriptions/8d3591aa-96b8-4737-ad09-00f9b1ed35ad / tenant/3edfe572-cb54-3ced-ae12-c5c177f39a12 / tenant/8d3591aa-96b8-4737-ad09-00f9b1ed35ad\n\n Microsoft.ApiManagement / Microsoft.CognitiveServices / Microsoft.ContainerService / Microsoft.KeyVault",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> subscriptions/8d3591aa-96b8-4737-ad09-00f9b1ed35ad<br><b></b> Microsoft.CognitiveServices",
      "exp": "The account-creation URI identifies the target subscription using its subscription ID and uses the Microsoft.CognitiveServices resource provider. A multi-service AI Services account can use one key and endpoint across supported language and vision services; the request body must specify the appropriate multi-service account kind. ([learn.microsoft.com](https://learn.microsoft.com/rest/api/cognitiveservices/accountmanagement/accounts/create?utm_source=openai))\n\n**Learn more:** [Accounts - Create](https://learn.microsoft.com/rest/api/cognitiveservices/accountmanagement/accounts/create) · [Authentication in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/authentication)"
    },
    {
      "n": 169,
      "domain": "",
      "ctx": -1,
      "q": "You need to recommend a solution for assessing the responses generated by Agent1 when it uses the product information stored in storage1. The solution must meet the technical requirements.  \n  \nWhat should you include in your recommendation?",
      "choices": {
        "A": "a Retrieval Augmented Generation (RAG) evaluator",
        "B": "a custom guardrail",
        "C": "a coherence evaluator",
        "D": "model fine-tuning"
      },
      "answer": "A",
      "exp": "A RAG evaluator can assess how well Agent1's responses align with the product information retrieved from storage1. In particular, a groundedness evaluator measures whether a response is supported by the supplied context rather than containing fabricated information. A coherence evaluator instead measures the logical flow and consistency of the response. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators?utm_source=openai))\n\n**Learn more:** [Retrieval-Augmented Generation (RAG) evaluators](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators) · [Built-in evaluators reference](https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators)"
    },
    {
      "n": 170,
      "domain": "",
      "ctx": -1,
      "q": "You have a Python application that uses Azure OpenAI structured outputs to extract fields from unstructured receipt text and support ticket text. The application uses this schema:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1793463074738-uqhi6bh7.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- The schema requires that a receipt has a discount_code value.\n- The schema can be used as is for Azure OpenAI structured outputs.\n- The generated JSON object will preserve the schema property order of merchant, order_number, discount_code, line_items, and total.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>The schema requires that a receipt has a discount_code value. — <b>No</b><br>The schema can be used as is for Azure OpenAI structured outputs. — <b>Yes</b><br>The generated JSON object will preserve the schema property order of merchant, order_number, discount_code, line_items, and total. — <b>Yes</b>",
      "exp": "1. **No:** The discount_code property must appear in the output, but its value may be null, so a non-null discount code is not required.\n2. **Yes:** The schema uses supported types and nested anyOf, requires every property, and sets additionalProperties to false for both objects.\n3. **Yes:** Structured outputs preserve the property order specified in the schema. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/structured-outputs?source=recommendations&utm_source=openai))\n\n**Learn more:** [How to use structured outputs with Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/structured-outputs)"
    },
    {
      "n": 171,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent. The agent generates summaries from retrieved policy documents.  \n  \nYou need to improve response completeness. The solution must be implemented in the application code's logic before responses are returned.  \n  \nWhat should you do?",
      "choices": {
        "A": "Increase the value of the presence_penalty parameter.",
        "B": "Decrease the value of the max_tokens parameter.",
        "C": "Add a reflection pass before the responses are returned.",
        "D": "Replace the model with a smaller deployment."
      },
      "answer": "C",
      "exp": "A reflection pass (a maker-checker or critic loop) is implemented in application code: the draft summary is reviewed against the retrieved policy documents for missing information and revised before the response is returned. This directly improves completeness at the code layer. Raising presence_penalty only discourages repeated tokens and does not check coverage. Lowering max_tokens makes truncated, incomplete summaries more likely. A smaller deployment generally reduces output quality and is a model change, not an application-logic change.\n\n**Learn more:** [AI Agent Orchestration Patterns - Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns)"
    },
    {
      "n": 172,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent. The agent generates summaries from retrieved policy documents.  \n  \nYou need to improve response completeness. The solution must be implemented in the application code's logic before responses are returned.  \n  \nWhat should you do?",
      "choices": {
        "A": "Enable response streaming.",
        "B": "Add a retry evaluation before the responses are returned.",
        "C": "Replace the model with a smaller deployment.",
        "D": "Decrease the value of the max_tokens parameter."
      },
      "answer": "B",
      "exp": "Adding an evaluation and retry step in application code lets the app check a summary for completeness, for example with a Response Completeness evaluator, and regenerate before returning it. Streaming only changes delivery timing and does not improve content. A smaller model typically reduces quality, and decreasing max_tokens makes truncation and incomplete summaries more likely.\n\n**Learn more:** [RAG evaluators for generative AI](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators?view=foundry)"
    },
    {
      "n": 173,
      "domain": "",
      "ctx": -1,
      "q": "You have an application that processes support case notes using Azure OpenAI in Microsoft Foundry Models.  \n  \nThe application uses the following request definitions.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1793783352215-zk5d34zb.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- request_a returns a vectorized response.\n- request_b returns a JSON-formatted response.\n- request_b always returns a case summary that includes risks.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>request_a returns a vectorized response. — <b>Yes</b><br>request_b returns a JSON-formatted response. — <b>No</b><br>request_b always returns a case summary that includes risks. — <b>No</b>",
      "exp": "1. **Yes:** A successful embeddings request returns a numeric vector representing the input text, assuming the specified deployment exists. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/embeddings?utm_source=openai))\n2. **No:** Although `request_b` specifies structured JSON output, it lacks the required `model` field and `additionalProperties: false` in its object schema. It therefore cannot produce the requested JSON completion as written; an error response could itself be formatted as JSON. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/foundry/reference/rest/chat-create-chat-completion?utm_source=openai))\n3. **No:** The request is invalid. Even if corrected, requiring `keyRisks` only requires the field to be present; its array can be empty, so actual risks are not guaranteed. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/structured-outputs?source=recommendations&utm_source=openai))\n\n**Learn more:** [Generate embeddings with Azure OpenAI](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/embeddings) · [Create a chat completion](https://learn.microsoft.com/en-us/azure/foundry/reference/rest/chat-create-chat-completion)"
    },
    {
      "n": 174,
      "domain": "",
      "ctx": -1,
      "q": "You are building an agent that retrieves the current time for a given location using a custom API.  \n  \nYou need to test the custom API's functionality.  \n  \nHow should you complete the command?\n\n assistants / completions / embeddings / threads\n\n content=[{ / functions=[{ / tool_resources=[{ / tools=[{",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> assistants<br><b></b> tools=[{",
      "exp": "The classic agent API uses the assistants endpoint to create an agent, and its tools array declares the functions available to that agent. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/ai-services/agents/quickstart?tabs=dotnet&utm_source=openai)) The displayed tools=[{ choice is the intended answer, but valid JSON requires \"tools\": [{ instead. The URL also needs the project endpoint path. Creating an agent only registers the tool definition; testing the custom API requires running the agent and executing the function when requested.\n\n**Learn more:** [Create a Foundry Agent Service project (classic)](https://learn.microsoft.com/en-us/azure/ai-services/agents/quickstart?tabs=dotnet) · [Azure AI Foundry Agent Service connector](https://learn.microsoft.com/en-us/connectors/azureagentservice/)"
    },
    {
      "n": 175,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription and 10,000 ASCII files.  \n  \nYou need to find files that contain specific phrases. The solution must use cosine similarity.  \n  \nWhich Azure OpenAI model should you use?",
      "choices": {
        "A": "text-embedding-ada-002",
        "B": "GPT-4",
        "C": "GPT-35 Turbo",
        "D": "GPT-4-32k"
      },
      "answer": "A",
      "exp": "text-embedding-ada-002 converts text into vectors that can be compared using cosine similarity. Embedding the file contents and search phrases allows the files to be ranked by semantic similarity. Cosine similarity alone does not guarantee an exact phrase match. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/foundry/openai/tutorials/embeddings?utm_source=openai))\n\n**Learn more:** [Azure OpenAI embeddings and document search tutorial](https://learn.microsoft.com/en-us/azure/foundry/openai/tutorials/embeddings)"
    },
    {
      "n": 176,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure subscription that contains a Microsoft Foundry resource hosting a GPT-3.5 Turbo model named Model1.  \n  \nYou configure Model1 with the following system message: “You are an AI assistant that helps people solve mathematical puzzles. Explain your answers as if the request is by a 4-year-old.”  \n  \nWhich prompt engineering technique does this illustrate?",
      "choices": {
        "A": "affordance",
        "B": "chain of thought",
        "C": "few-shot learning",
        "D": "priming"
      },
      "answer": "D",
      "exp": "Priming, in the broad sense used here, guides a model’s subsequent responses by establishing context and expectations. The system message sets the assistant’s role as a mathematical-puzzle helper and directs it to explain answers for a 4-year-old. It supplies neither examples for few-shot learning nor a step-by-step reasoning instruction. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions&s=09&utm_source=openai))\n\n**Learn more:** [System message design for Azure OpenAI](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/advanced-prompt-engineering) · [Prompt engineering techniques](https://learn.microsoft.com/azure/cognitive-services/openai/concepts/prompt-engineering)"
    },
    {
      "n": 177,
      "domain": "",
      "ctx": -1,
      "q": "You have a Microsoft Foundry project containing an agent and an image generation model deployment.  \n  \nThe agent creates original images from user-supplied product photos. Currently, when you ask the agent to place a picture of a product in different environments, it returns images in which the product itself is altered and violates your company usage guidelines.  \n  \nYou need to minimize the likelihood of changes to the product identity and visual characteristics in the generated image.  \n  \nWhat should you do?",
      "choices": {
        "A": "Apply a groundedness detection filter.",
        "B": "Set the input_fidelity parameter to high.",
        "C": "Include a prompt and input image in the request.",
        "D": "Decrease the value of the top_p parameter."
      },
      "answer": "B",
      "exp": "Setting `input_fidelity` to `high` directs a supported image-editing model to make more effort to preserve the input image’s style and features. This helps maintain product identity and visual details when changing the surrounding environment, although it does not guarantee an unchanged product. Support for the parameter depends on the deployed model. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/foundry/reference/rest/images-create-image-edit-multipart-images-create-image-edit-json?utm_source=openai))\n\n**Learn more:** [Create an image edit](https://learn.microsoft.com/en-us/azure/foundry/reference/rest/images-create-image-edit-multipart-images-create-image-edit-json) · [What's new in Azure OpenAI in Microsoft Foundry Models?](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/whats-new)"
    },
    {
      "n": 178,
      "domain": "",
      "ctx": -1,
      "q": "Solution: You raise the value of the `top_p` parameter.  \n  \nDoes this meet the goal?",
      "choices": {
        "A": "Yes",
        "B": "No"
      },
      "answer": "B",
      "exp": "Increasing `top_p` broadens the range of tokens considered during sampling; it does not reliably improve coverage of required regulatory clauses. Explicit instructions to include all required clauses and evaluation for completeness are more directly suited to the goal. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/foundry/reference/rest/agents-create-agent-from-manifest?utm_source=openai))\n\n**Learn more:** [Create an agent from a manifest](https://learn.microsoft.com/en-us/azure/foundry/reference/rest/agents-create-agent-from-manifest) · [Develop a RAG solution on Azure: Prompt engineering](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-prompt-engineering)"
    },
    {
      "n": 179,
      "domain": "",
      "ctx": -1,
      "q": "You have an Azure Custom Vision service project that performs object detection. The project uses the General domain for classification and has a trained model.  \n  \nYou need to export the model for use on a network disconnected from the internet.  \n  \nWhich three actions should you perform in sequence?\n\nItems:\n- Export the model.\n- Change the classification type.\n- Create a new classification model.\n- Change Domains to General (compact).\n- Retrain the model.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b>1</b> Change Domains to General (compact).<br><b>2</b> Retrain the model.<br><b>3</b> Export the model.",
      "exp": "Compact-domain models can be exported to run locally. After changing an existing project to a compact domain, retrain it to create a compact-domain iteration, and then export that iteration for use offline. A new classification model or a change to the classification type is unnecessary. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/ai-services/Custom-Vision-Service/export-your-model?utm_source=openai))\n\n**Learn more:** [Export your model for use with mobile devices](https://learn.microsoft.com/en-us/azure/ai-services/Custom-Vision-Service/export-your-model) · [Select a domain for a Custom Vision project](https://learn.microsoft.com/en-us/azure/ai-services/Custom-Vision-Service/select-domain)"
    },
    {
      "n": 180,
      "domain": "",
      "ctx": -1,
      "q": "You are developing an application that uses the Azure Vision in Foundry Tools client library. The application contains the following code.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1793783358679-aldsnr3w.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nStatements:\n- The code will perform face recognition.\n- The code will list tags and their associated confidence.\n- The code will read an image file from the local file system.",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br>The code will perform face recognition. — <b>No</b><br>The code will list tags and their associated confidence. — <b>Yes</b><br>The code will read an image file from the local file system. — <b>Yes</b>",
      "exp": "1. No: The requested visual features are tags and description; neither performs face recognition. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/computer-vision/image-analysis-transparency-note?source=recommendations&utm_source=openai))\n2. Yes: The loop prints each tag's name and confidence. ([learn.microsoft.com](https://learn.microsoft.com/en-us/rest/api/computervision/analyze-image/analyze-image?view=rest-computervision-v3.2&utm_source=openai))\n3. Yes: `open(local_image, \"rb\")` opens the local file as a binary stream, which is passed to the analysis method.\n\n**Learn more:** [Image Analysis transparency note](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/computer-vision/image-analysis-transparency-note) · [Analyze Image REST API, version 3.2](https://learn.microsoft.com/en-us/rest/api/computervision/analyze-image/analyze-image?view=rest-computervision-v3.2)"
    },
    {
      "n": 181,
      "domain": "",
      "ctx": -1,
      "q": "You have a factory that manufactures food products.  \n  \nYou need to build a monitoring solution for staff compliance with personal protective equipment (PPE) requirements.  \n  \nThe solution must meet these requirements:  \n  \n- Identify staff who have removed masks or safety glasses.  \n- Perform a compliance check every 15 minutes.  \n- Minimize development effort.  \n- Minimize costs.  \n  \nWhich service should you use?",
      "choices": {
        "A": "Azure AI Face",
        "B": "Azure Vision in Foundry Tools",
        "C": "Azure Video Analyzer for Media (formerly Video Indexer)"
      },
      "answer": "A",
      "exp": "Azure AI Face can detect faces in images and return built-in mask and glasses attributes, reducing the need to develop a custom model. An application can schedule image checks every 15 minutes rather than continuously process video. The attributes are predictions, however, and do not specifically certify that detected eyewear is safety glasses. Face service access is subject to eligibility restrictions. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-face-detection?utm_source=openai))\n\n**Learn more:** [Face detection, attributes, and input data](https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-face-detection) · [Face Detection Operations - Detect](https://learn.microsoft.com/en-us/rest/api/face/face-detection-operations/detect)"
    },
    {
      "n": 182,
      "domain": "",
      "ctx": -1,
      "q": "You have a Python application that sends customer support transcripts to Azure Language in Foundry Tools through the REST API. The transcripts are in English and can contain customer names, email addresses, and phone numbers.  \n  \nYou need to store a redacted transcript of each conversation. The support workflow must redact only customer names and leave other entity types unchanged.  \n  \nHow should you complete the analyze-text request body?\n\n \"kind\": \"EntityRecognition\" / \"kind\": \"LanguageDetection\" / \"kind\": \"PiiEntityRecognition\"\n\n \"piiCategories\": [\"Organization\"] / \"piiCategories\": [\"Person\"] / \"piiCategories\": [\"PhoneNumber\"]",
      "choices": {},
      "answer": "",
      "visual": true,
      "answerHtml": "<b>Answers:</b><br><b></b> &quot;kind&quot;: &quot;PiiEntityRecognition&quot;<br><b></b> &quot;piiCategories&quot;: [&quot;Person&quot;]",
      "exp": "PiiEntityRecognition returns text with detected PII redacted. Specifying only Person in piiCategories limits redaction to that category, leaving other entity types, such as email addresses and phone numbers, unchanged. Person does not distinguish customer names from other people's names. ([learn.microsoft.com](https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/how-to/redact-text-pii?utm_source=openai))\n\n**Learn more:** [Detect and redact Personally Identifiable Information in text](https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/how-to/redact-text-pii) · [Transparency note: Named Entity Recognition](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/language-service/transparency-note-named-entity-recognition)"
    }
  ]
};
