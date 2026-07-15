
{
  "name": "My workflow",
  "nodes": [
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "7467587c-8881-4a7e-9ef7-81b30a846f16",
              "name": "=JobDescription",
              "value": "={{$json.JobDescription}}",
              "type": "string"
            }
          ]
        },
        "includeOtherFields": true,
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        -1584,
        304
      ],
      "id": "c1eded75-c2ee-4e73-b331-2c09c3dd8bd2",
      "name": "Edit Fields"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "6ed71024-3736-4831-b578-a0a199cb5b72",
              "name": "=Resume",
              "value": "={{ $('Edit Fields6').item.json.Resume }}",
              "type": "string"
            }
          ]
        },
        "includeOtherFields": true,
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        -1008,
        304
      ],
      "id": "bd1119b0-a19a-499b-bdd8-6f7af47c06db",
      "name": "Edit Fields1"
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "loose",
            "version": 3
          },
          "conditions": [
            {
              "id": "3c453d9d-57e3-41db-908b-5e6a2c0174a0",
              "leftValue": "={{$json.match_percentage}}",
              "rightValue": 75,
              "operator": {
                "type": "number",
                "operation": "gte"
              }
            }
          ],
          "combinator": "and"
        },
        "looseTypeValidation": true,
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.3,
      "position": [
        -560,
        304
      ],
      "id": "2d54c1d0-9c7b-478f-84fd-25a412f9c859",
      "name": "If"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "7baf0f76-a003-4a94-8cd0-d6cca7eda7a6",
              "name": "status",
              "value": "Rejected",
              "type": "string"
            },
            {
              "id": "a63e551b-c91c-43a3-a060-71bda9aaf986",
              "name": "reason",
              "value": "Match percentage below threshold",
              "type": "string"
            },
            {
              "id": "bcd0c21f-24fa-409d-9668-21f349c9e2dc",
              "name": "match_percentage",
              "value": "={{$json.match_percentage}}",
              "type": "string"
            },
            {
              "id": "41beb487-af99-43e2-b927-6912dd397f53",
              "name": "matching_skills",
              "value": "Java",
              "type": "string"
            },
            {
              "id": "e621fe3d-f359-494c-98d4-c04764c351c5",
              "name": "missing_skills",
              "value": "SQL, Problem Solving",
              "type": "string"
            }
          ]
        },
        "includeOtherFields": true,
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        -336,
        400
      ],
      "id": "d526c01f-6100-46b3-a9b3-115395bf9c93",
      "name": "Edit Fields2"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "60ae3a43-5cb4-4d3d-9ada-63be2056e1a4",
              "name": "Data to rewrite resume ",
              "value": "Name: Tarun  Education: Diploma in Computer Engineering  Skills: C, Java, DBMS, Data Structures, Operating Systems  Projects: Student Management System Library Management System  Achievements: 82% in mid exams  Interests: Software Development AI Problem Solving  Strengths: Self-learning Persistence Adaptability Growth Mindset",
              "type": "string"
            },
            {
              "id": "27230343-777e-46b9-ae6c-b65c2be8f4f5",
              "name": "job requirements ",
              "value": "java developer ",
              "type": "string"
            },
            {
              "id": "2b5010b0-7dae-46f7-be33-743d35a63bbf",
              "name": "experience ",
              "value": "junior development",
              "type": "string"
            },
            {
              "id": "44803714-53f9-4ec6-95e5-8ea94cff3f5a",
              "name": "characteristics",
              "value": "**Professional Summary**  Motivated Computer Engineering diploma student with a strong foundation in C programming, Data Structures, Java, DBMS, and Operating Systems. Passionate about software development, problem-solving, and emerging AI technologies. Known for self-learning ability, persistence, adaptability, and a growth mindset. Eager to contribute technical skills and continuously learn in a professional software development environment.",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        -336,
        208
      ],
      "id": "85363090-80f0-4db5-9007-53435e74a5b8",
      "name": "Edit Fields3"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "5fa0736d-a7b7-4d93-81fc-a689aa47318d",
              "name": "resume data",
              "value": "Name: Tarun  Education: Diploma in Computer Engineering  Skills: C Java DBMS Data Structures Operating Systems  Projects: Student Management System  Strengths: Problem Solving Self Learning Adaptability Persistence  Career Goal: Junior Java Developer",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        -112,
        208
      ],
      "id": "3cf46187-be72-4d7d-b8df-f4f32933f158",
      "name": "Edit Fields4"
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=You are a data extraction system.\n\nYour task:\nExtract job details from the given job description.\n\nCRITICAL RULES:\n- Output JSON only.\n- Do not explain.\n- Do not write code.\n- Do not use markdown.\n- Do not use ``` blocks.\n- First character must be {\n- Last character must be }\n\nReturn exactly this structure:\n\n{\n  \"job_title\": \"\",\n  \"required_skills\": [],\n  \"experience_level\": \"\"\n}\n\nRules for required_skills:\n- Must contain only skill names.\n- Use simple strings only.\n- Do not create nested arrays.\n- Do not write sentences.\n\nWrong:\n[\"Knowledge of Java\"]\n\nWrong:\n[[\"Java\",\"DBMS\"]]\n\nCorrect:\n[\"Java\",\"DBMS\"]\n\nJob Description:\n{{$json.JobDescription}}\n",
        "batching": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "typeVersion": 1.9,
      "position": [
        -1360,
        304
      ],
      "id": "25cb32c1-ec49-427b-a5c1-32305f5cc75c",
      "name": "Basic LLM Chain",
      "notesInFlow": true,
      "alwaysOutputData": false
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOllama",
      "typeVersion": 1,
      "position": [
        -1296,
        528
      ],
      "id": "66e15721-7659-4110-8ade-f1a53b93faeb",
      "name": "Ollama Chat Model",
      "credentials": {
        "ollamaApi": {
          "id": "1dVTVc6SdECYHLbz",
          "name": "Ollama account"
        }
      }
    },
    {
      "parameters": {
        "jsCode": "let aiOutput = $json.text || \"\";\n\nconst start = aiOutput.indexOf(\"{\");\nconst end = aiOutput.lastIndexOf(\"}\");\n\naiOutput = aiOutput.substring(start, end + 1);\n\nconst jobData = JSON.parse(aiOutput);\n\n\nconst requiredSkills = (jobData.required_skills || [])\n  .flat()\n  .map(skill => String(skill));\n\n\nconst resumeText = $json.Resume || \"\";\n\nconst resume = resumeText.toLowerCase();\n\n\nlet matching = [];\nlet missing = [];\n\n\nfor (const skill of requiredSkills) {\n\n  if (resume.includes(skill.toLowerCase())) {\n    matching.push(skill);\n  } else {\n    missing.push(skill);\n  }\n\n}\n\n\nconst percentage =\nrequiredSkills.length === 0\n? 0\n: (matching.length / requiredSkills.length) * 100;\n\n\nreturn [\n  {\n    json: {\n      job_title: jobData.job_title,\n      matching_skills: matching,\n      missing_skills: missing,\n      match_percentage: percentage,\n      Resume: resumeText\n    }\n  }\n];"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        -784,
        304
      ],
      "id": "57df3a1e-921f-4d6a-8e77-faf845bdaf18",
      "name": "Code in JavaScript"
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOllama",
      "typeVersion": 1,
      "position": [
        192,
        432
      ],
      "id": "e99924c8-21f6-4acf-8d66-d86ecf0f8b01",
      "name": "Ollama Chat Model1",
      "credentials": {
        "ollamaApi": {
          "id": "1dVTVc6SdECYHLbz",
          "name": "Ollama account"
        }
      }
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=You are a resume formatting engine.\n\nYour only job is to improve the writing quality of the given resume.\n\nSTRICT RULES:\n- include the name of the person \n- include the name of the person who is applying for the job so that next node can use it \n- Use only the provided resume data.\n- Never create companies.\n- Never create job experience.\n- Never create projects.\n- Never create skills.\n- Never create dates.\n- Never create locations.\n- Do not add placeholders.\n- Do not explain your changes.\n- Do not say \"Here is the resume\".\n- Keep the candidate status exactly as provided.\n-Never remove provided sections.\nIf a project exists, keep it.\nOnly improve wording.\n-do not add any place holders even if it is necessary  \nIf data is missing, skip that section.\n\nResume Data:\n{{$json[\"resume data\"]}}\n\nReturn only:\n\nPROFESSIONAL SUMMARY\n\nTECHNICAL SKILLS\n\nPROJECTS\n\nEDUCATION\n\nSTRENGTHS",
        "batching": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "typeVersion": 1.9,
      "position": [
        112,
        208
      ],
      "id": "696fd529-77e6-4389-a87e-60b74932a62a",
      "name": "Basic LLM Chain1"
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=You are a factual entry-level cover letter writer.\n\nCreate a cover letter using ONLY the provided resume data.\n\nRules:\n- If resume contains words like \"current semester\", \"studying\", or \"pursuing\", never say completed education.\n- Do not use phrases like \"contribute to company/team success\" unless work experience is provided.\n- Never create information not present in the resume.\n-Avoid generic resume phrases like:\nhighly motivated,\ndetail-oriented,\nhigh-quality solutions,\nprofessional\n\nPrefer simple fresher/student language.\n- Do not assume graduation status.\n- Do not mention professional experience unless provided.\n- Do not add companies, dates, certifications, or achievements.\n- Do not use words like expert, excellent, strong, advanced, professional, experienced.\n- Do not claim business impact or production usage.\n- Mention projects if they exist in the resume.\n- Treat academic projects as learning projects only.\n- Keep the candidate as student/fresher level.\n- Avoid repeating the same skill multiple times.\n- Keep tone simple, honest, and professional.\n-Avoid generic claims like \"deliver high-quality solutions\".\nUse simple learning-focused language.\n- Never output placeholders like [Your Name]\n- Use the candidate name from resume if available\n- Never say real-world unless resume contains it\n- Never add self-taught unless provided\n- Do not upgrade learning projects into experience\n- Do not assume completion of education\n-Always include a polite closing line and signature if the candidate name is available.\n- Maximum 200 words.\n\nResume:\n{{$json.text}}\n\nStructure:\n\nDear Hiring Manager,\n\nParagraph 1:\nMention the target role and education exactly as provided.\n\nParagraph 2:\nMention ONLY technical skills and projects present in the resume.\n\nParagraph 3:\nMention strengths and willingness to learn.\n\nClosing.\n\nOutput only the cover letter.",
        "batching": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "typeVersion": 1.9,
      "position": [
        464,
        208
      ],
      "id": "bb3071cf-e957-4669-92a0-ce67aa165ef3",
      "name": "Basic LLM Chain2"
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOllama",
      "typeVersion": 1,
      "position": [
        544,
        432
      ],
      "id": "2ed3f014-ab96-40d9-90fa-89d2254d03d7",
      "name": "Ollama Chat Model2",
      "credentials": {
        "ollamaApi": {
          "id": "1dVTVc6SdECYHLbz",
          "name": "Ollama account"
        }
      }
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "e0eafabd-03e3-4712-b4f2-5eb325820259",
              "name": "status",
              "value": "Accepted",
              "type": "string"
            },
            {
              "id": "7c089a2a-b0b9-4ab2-b3cb-d0eca1f5c7eb",
              "name": "optimized_resume",
              "value": "={{$node[\"Basic LLM Chain1\"].json[\"text\"]}}",
              "type": "string"
            },
            {
              "id": "b578a892-c6ad-401c-8f50-0a4c911751ab",
              "name": "cover_letter",
              "value": "={{$json.text}}",
              "type": "string"
            },
            {
              "id": "b72d2c85-7183-459c-bcaa-b45f18e01250",
              "name": "created_by",
              "value": "AI RESUME BOT",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        816,
        208
      ],
      "id": "1bcc8965-491d-445e-9d39-9f8020e46df8",
      "name": "Edit Fields5"
    },
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "resume-bot",
        "responseMode": "responseNode",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        -2256,
        304
      ],
      "id": "efc2b2c0-da00-4baa-97ad-a12565e9aa5a",
      "name": "Webhook",
      "webhookId": "ebd09738-31b3-44ba-a2f2-daa7eabdd128"
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={{ $json }}",
        "options": {}
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.5,
      "position": [
        1040,
        176
      ],
      "id": "0ffb1e07-3ecc-4095-a2dd-246401f63394",
      "name": "Respond to Webhook",
      "alwaysOutputData": true
    },
    {
      "parameters": {
        "operation": "pdf",
        "binaryPropertyName": "resumeFile",
        "options": {}
      },
      "type": "n8n-nodes-base.extractFromFile",
      "typeVersion": 1.1,
      "position": [
        -2032,
        304
      ],
      "id": "e0befc37-fbed-482b-942d-18864bf049c0",
      "name": "Extract from File"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "9cd96c4a-da88-4680-a660-897b3a519ed6",
              "name": "Resume",
              "value": "={{$json.text}}",
              "type": "string"
            },
            {
              "id": "c69a5b49-f9c7-46dd-9f62-bb326b02de2c",
              "name": "JobDescription",
              "value": "={{$node[\"Webhook\"].json.body.job_description}}",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        -1808,
        304
      ],
      "id": "dbf5a9b6-0cc7-47a7-ba2d-67c84dc92778",
      "name": "Edit Fields6"
    }
  ],
  "pinData": {},
  "connections": {
    "Edit Fields": {
      "main": [
        [
          {
            "node": "Basic LLM Chain",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields1": {
      "main": [
        [
          {
            "node": "Code in JavaScript",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If": {
      "main": [
        [
          {
            "node": "Edit Fields3",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Edit Fields2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields3": {
      "main": [
        [
          {
            "node": "Edit Fields4",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields4": {
      "main": [
        [
          {
            "node": "Basic LLM Chain1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Basic LLM Chain": {
      "main": [
        [
          {
            "node": "Edit Fields1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Ollama Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "Basic LLM Chain",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Code in JavaScript": {
      "main": [
        [
          {
            "node": "If",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Ollama Chat Model1": {
      "ai_languageModel": [
        [
          {
            "node": "Basic LLM Chain1",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Basic LLM Chain1": {
      "main": [
        [
          {
            "node": "Basic LLM Chain2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Ollama Chat Model2": {
      "ai_languageModel": [
        [
          {
            "node": "Basic LLM Chain2",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Basic LLM Chain2": {
      "main": [
        [
          {
            "node": "Edit Fields5",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields2": {
      "main": [
        []
      ]
    },
    "Webhook": {
      "main": [
        [
          {
            "node": "Extract from File",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields5": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Extract from File": {
      "main": [
        [
          {
            "node": "Edit Fields6",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields6": {
      "main": [
        [
          {
            "node": "Edit Fields",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false
  },
  "versionId": "e96a2734-ed1c-4229-ad0f-4cb8c36ff9dd",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "c7072e4882cf429118228c31e13255dfdbc8d8ff82e5d6e1a0e80a5e43f986c5"
  },
  "id": "VAMDRIMcVZpprm9d",
  "tags": []
}